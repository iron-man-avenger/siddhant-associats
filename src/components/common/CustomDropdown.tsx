import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface DropdownOption {
  value: string;
  label: string;
  badge?: string;
}

interface CustomDropdownProps {
  options: (string | DropdownOption)[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
  menuClassName?: string;
  theme?: 'crimson' | 'teal';
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select option',
  icon,
  className = '',
  menuClassName = '',
  theme = 'crimson'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Normalize options
  const normalizedOptions: DropdownOption[] = options.map((opt) => {
    if (typeof opt === 'string') {
      return { value: opt, label: opt === 'all' ? 'All Brands' : opt };
    }
    return opt;
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const activeColorClasses = 
    theme === 'crimson' 
      ? 'text-natraj-600 bg-natraj-50/90 font-bold' 
      : 'text-apsara-800 bg-apsara-50/90 font-bold';

  const checkColorClasses =
    theme === 'crimson'
      ? 'text-natraj-500'
      : 'text-apsara-700';

  const triggerRingClasses = 
    theme === 'crimson'
      ? 'focus:ring-2 focus:ring-natraj-500/20 focus:border-natraj-500'
      : 'focus:ring-2 focus:ring-apsara-700/20 focus:border-apsara-700';

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-xl border border-gray-200 bg-ivory-50 text-gray-800 text-xs sm:text-sm font-semibold hover:bg-white hover:border-gray-300 transition-all duration-200 cursor-pointer shadow-xs ${triggerRingClasses} ${
          isOpen ? 'bg-white border-natraj-500 ring-2 ring-natraj-500/15' : ''
        }`}
      >
        <span className="flex items-center gap-2 truncate">
          {icon}
          <span className="truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-natraj-500' : ''
          }`} 
        />
      </button>

      {/* Styled Dropdown Menu */}
      {isOpen && (
        <div 
          className={`absolute right-0 z-50 mt-1.5 w-full min-w-[200px] sm:min-w-[220px] rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-floating p-1.5 animate-in fade-in zoom-in-95 duration-150 ${menuClassName}`}
          role="listbox"
        >
          <div className="max-h-60 overflow-y-auto space-y-1 scrollbar-none py-0.5">
            {normalizedOptions.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-left transition-all duration-150 cursor-pointer group ${
                    isSelected
                      ? activeColorClasses
                      : 'text-gray-700 hover:bg-ivory-200 hover:text-apsara-900'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    {opt.badge && (
                      <span className="w-2 h-2 rounded-full bg-natraj-500 shrink-0" />
                    )}
                    <span className="truncate">{opt.label}</span>
                  </span>

                  {isSelected && (
                    <Check className={`w-4 h-4 shrink-0 ${checkColorClasses}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
