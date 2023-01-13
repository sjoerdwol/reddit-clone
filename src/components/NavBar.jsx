import { AiOutlineReddit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { resetState } from '../features/SearchResults/searchResultsSlice';

export function NavBar() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetState());
  }

  return (
    <header className='flex flex-col gap-3 py-5 items-center lg:flex-row lg:justify-around lg:gap-0 lg:py-7 2xl:gap-7 2xl:py-9'>
      <div className='flex items-center gap-2'>
        <AiOutlineReddit className='text-2xl text-green-600 md:text-3xl lg:text-4xl 2xl:text-6xl' onClick={handleClick} />
        <div className='font-bold md:text-xl lg:text-2xl 2xl:text-4xl' onClick={handleClick} >
          <span className='text-green-600'>Reddit</span>Clone
        </div>
      </div>
      <nav>
        <ul className='flex gap-5 font-semibold md:text-lg lg:gap-7 lg:text-xl 2xl:text-3xl'>
          <li>Popular</li>
          <li>Gaming</li>
          <li>Sports</li>
          <li className='hidden md:block'>Television</li>
          <li className='hidden md:block'>Celebrity</li>
        </ul>
      </nav>
    </header>
  )
}