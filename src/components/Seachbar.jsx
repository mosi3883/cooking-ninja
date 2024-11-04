// styles
import './Searchbar.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Seachbar() {
  const [term, setTerms] = useState('');
  const navigate = useNavigate();
  const handleSubmit = function (e) {
    e.preventDefault();

    navigate(`/search?text=${term}`);
    setTerms('');
  };
  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search:</label>
        <input type='text' id='search' onChange={(e) => setTerms(e.target.value)} value={term} required />
      </form>
    </div>
  );
}

export default Seachbar;
