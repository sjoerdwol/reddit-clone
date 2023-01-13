import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchResults } from "../features/SearchResults/searchResultsSlice";

import { HiOutlineSearch } from 'react-icons/hi';

export function SearchBar() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTerm(e.target.value);
  }

  const handleDispatch = () => {
    dispatch(fetchResults(term));
  }

  return (
    <div className='px-10 pt-3 pb-7 w-full xl:px-32 xl:py-9'>
      <div className='bg-gray-300 flex h-10 items-center justify-center rounded-full w-full'>
        <input className='bg-transparent h-full placeholder-gray-500 text-gray-700 w-5/6 md:w-11/12' placeholder='Search...' onChange={handleChange} onKeyUp={(e) => e.key === 'Enter' ? handleDispatch() : ''} />
        <HiOutlineSearch className='hover:cursor-pointer text-zinc-900' onClick={handleDispatch} />
      </div>
    </div>
  )
}