import React from 'react';
import Flower from './Flower';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const FlowerList = () => {
  const { flowers, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (flowers.length < 1) {
    return <h2 className='section-title'>Brak w bazie danych.</h2>;
  }

  return (
    <section className='section'>
      <div className='flowers-center'>
        {flowers.map((item) => {
          return <Flower key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default FlowerList;
