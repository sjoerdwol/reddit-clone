import { AiOutlineReddit } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { selectSearchIsLoading } from '../features/SearchResults/searchResultsSlice';
import { selectSubredditIsLoading } from '../features/subreddits/subredditsSlice';

export function Startpage() {
  const resultIsLoading = useSelector(selectSearchIsLoading);
  const subredditIsLoading = useSelector(selectSubredditIsLoading);

  return (
    <div className='flex flex-col items-center h-auto text-center w-full'>
      <AiOutlineReddit className='text-7xl text-green-600 lg:text-8xl xl:text-9xl' />
      <span className='font-semibold text-2xl mb-1 text-green-600 xl:text-5xl' data-testid='welcome_title'>Welcome!</span>
      {resultIsLoading || subredditIsLoading ? 
      <span className='font-medium text-xl xl:text-4xl' data-testid='loading_message'>Loading results...</span> : 
      <span className='font-medium text-xl xl:text-4xl' data-testid='welcome_instruction'>Please choose a category <br /> or enter a search term</span>}
    </div>
  )
}