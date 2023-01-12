import { useState } from "react"
import { useDispatch } from "react-redux";
import { fetchResults } from "../features/SearchResults/searchResultsSlice";

export function SearchBar() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTerm(e.target.value);
    dispatch(fetchResults(term));
  }

  return (
    <div className='px-10 pt-3 pb-7 w-full xl:px-32 xl:py-9'>
      <div className='bg-gray-300 flex h-10 items-center justify-center rounded-full w-full'>
        <input className='bg-transparent h-full placeholder-gray-500 text-gray-700 w-5/6 md:w-11/12' placeholder='Search...' onChange={handleChange} />
      </div>
    </div>
  )
}