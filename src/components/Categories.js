import React from 'react';
import CategoryButton from './CategoryButton';
import { ReactComponent as PetuniaIcon } from '../svg/petunia.svg';
import { ReactComponent as TomatoIcon } from '../svg/tomato.svg';
import { ReactComponent as VioletIcon } from '../svg/violet.svg';
import { ReactComponent as SunflowerIcon } from '../svg/sunflower.svg';

export default function Categories() {
  console.log(PetuniaIcon);
  return (
    <div className='category-container'>
      <CategoryButton
        icon={<VioletIcon />}
        buttonText='Rabatowe'
        activeNumber='1'
        categoryName='rabatowe'
      />
      <CategoryButton
        icon={<PetuniaIcon />}
        buttonText='Balkonowe'
        activeNumber='2'
        categoryName='balkonowe'
      />
      <CategoryButton
        icon={<SunflowerIcon />}
        buttonText='Byliny'
        activeNumber='4'
        categoryName='byliny'
      />
      <CategoryButton
        icon={<TomatoIcon />}
        buttonText='Warzywa'
        activeNumber='3'
        categoryName='warzywa'
      />
    </div>
  );
}
