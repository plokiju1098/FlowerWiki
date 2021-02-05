/* eslint-disable */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from '../data';

const SingleFlower = () => {
  const { id } = useParams();
  const newFlower = data.filter((flower) => flower.id === parseInt(id));

  return (
    <div className='single-page'>
      <Link to='/' className='back-button'>
        ◀ Wstecz
      </Link>

      <div className='detail-container'>
        <img src={newFlower[0].image} alt={newFlower[0].name} />

        <div className='description'>
          <h2> {newFlower[0].name} </h2>
          <p></p>
          <div className='other-names'>
            <label>Inne nazwy: </label>
            {newFlower[0].other_names}
          </div>
        </div>
      </div>
      <div className='additional-container'>
        <h2>Opis:</h2>
        <p>{newFlower[0].cultivation}</p>
      </div>
    </div>
  );
};

export default SingleFlower;
