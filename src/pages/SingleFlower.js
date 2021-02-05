/* eslint-disable */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from '../data';

const SingleFlower = () => {
  const { id } = useParams();
  const newFlower = data.filter((flower) => flower.id === parseInt(id));

  return (
    <div className='single-page'>
      <Link to='/' className='single-back'>
        ◀ Wstecz
      </Link>
      <div className='detail-container'>
        <img src={newFlower[0].image} alt={newFlower[0].name} />

        <div className='description'>
          <h2> {newFlower[0].name} </h2>
          <p>{newFlower[0].cultivation}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFlower;
