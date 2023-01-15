import { AiOutlineReddit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { resetSearch } from '../features/SearchResults/searchResultsSlice';
import { resetSubreddit } from '../features/subreddits/subredditsSlice';
import { fetchSubreddit } from '../features/subreddits/subredditsSlice'

export function NavBar() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetSearch());
    dispatch(resetSubreddit());
  }

  const handleSubredditCall = (e) => {
    handleReset();
    dispatch(fetchSubreddit(e.target.innerHTML));
  }

  return (
    <header className='flex flex-col gap-3 py-5 items-center lg:flex-row lg:justify-around lg:gap-0 lg:py-7 2xl:gap-7 2xl:py-9'>
      <div className='flex items-center gap-2' data-testid='navbar_title'>
        <AiOutlineReddit className='hover:cursor-pointer text-2xl text-green-600 md:text-3xl lg:text-4xl 2xl:text-6xl' onClick={handleReset} data-testid='navbar_title_icon'/>
        <div className='font-bold hover:cursor-pointer md:text-xl lg:text-2xl 2xl:text-4xl' onClick={handleReset} data-testid='navbar_title_text'>
          <span className='text-green-600'>Reddit</span>Clone
        </div>
      </div>
      <nav>
        <ul className='flex gap-5 font-semibold md:text-lg lg:gap-7 lg:text-xl 2xl:text-3xl' data-testid='navbar_navigation'>
          <li className='hover:cursor-pointer' onClick={handleSubredditCall} data-testid='navbar_navigation_item'>Popular</li>
          <li className='hover:cursor-pointer' onClick={handleSubredditCall} data-testid='navbar_navigation_item'>Gaming</li>
          <li className='hover:cursor-pointer' onClick={handleSubredditCall} data-testid='navbar_navigation_item'>Sports</li>
          <li className='hidden hover:cursor-pointer md:block' onClick={handleSubredditCall} data-testid='navbar_navigation_item'>Television</li>
          <li className='hidden hover:cursor-pointer md:block' onClick={handleSubredditCall} data-testid='navbar_navigation_item'>Celebrity</li>
        </ul>
      </nav>
    </header>
  )
}