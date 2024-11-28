import { FC, useState } from 'react';

export const Dropdown: FC<{ onSortChange: (sortType: string) => void }> = ({
  onSortChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Сортировать');

  const options = [
    { label: 'По цене (возрастание)', value: 'priceAsc' },
    { label: 'По цене (убывание)', value: 'priceDesc' },
    { label: 'По популярности', value: 'popularity' },
    { label: 'По новизне', value: 'newest' },
  ];

  const handleOptionClick = (option: (typeof options)[number]) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    onSortChange(option.value);
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedOption}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
