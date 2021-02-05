import React from 'react';
import FlowerList from '../components/FlowerList';
import SearchForm from '../components/SearchForm';
import Categories from '../components/Categories';
const Home = () => {
  return (
    <main>
      <Categories />
      <SearchForm />
      <FlowerList />
    </main>
  );
};
export default Home;
