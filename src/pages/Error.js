import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>oops! nie ma takiej strony</h1>
        <Link to='/' className='btn-primary'>
          Back to home page
        </Link>
      </div>
    </section>
  );
};
export default Error;
