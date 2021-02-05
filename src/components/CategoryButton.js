import React from 'react';
import { useGlobalContext } from '../context';

export default function CategoryButton({
  buttonText,
  activeNumber,
  categoryName,
  icon,
}) {
  const { setCategory, active, setActive } = useGlobalContext();

  return (
    <div>
      <a
        onClick={() => {
          if (active === activeNumber) {
            setCategory('');
            setActive(0);
          } else {
            setCategory(categoryName);
            setActive(activeNumber);
          }
        }}
        className={
          active === activeNumber ? 'category-btn active' : 'category-btn'
        }
      >
        <span className='category-icon'>{icon}</span>
        {buttonText}
      </a>
    </div>
  );
}
