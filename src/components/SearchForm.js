import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchFlower = () => {
    setSearchTerm(searchValue.current.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label>Wpisz nazwe rośliny</label>
          <input
            type='text'
            id='rosliny'
            ref={searchValue}
            onChange={searchFlower}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
