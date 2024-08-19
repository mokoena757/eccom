import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../SearchForm.css'

//icons
import SearchIcon from '@mui/icons-material/Search';

function SearchForm() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : '/search');
  };

  return ( 
    <form onSubmit={submitHandler} className='search_form' >
      <input  onChange={(e) => setQuery(e.target.value)} placeholder='Search Product' className='search_form_input' />
      <button  type='submit' className='search_form_btn' >
      <SearchIcon />
      </button>
    </form>
  )
}

export default SearchForm
