import React from 'react';
import { Link } from 'react-router-dom';
import '../css/single-flower.css';

const Flower = ({ id, name, image, category }) => {
  return (
    <article className='flower'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>

      <div className='flower-footer'>
        <h2>{name}</h2>
        <h3>{category}</h3>
        <Link to={`/flower/${id}`} className='details-btn'>
          Szczegóły
        </Link>
      </div>
    </article>
  );
};

export default Flower;
