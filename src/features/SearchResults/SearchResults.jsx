import { ResultCard } from "../../components/ResultCard"
import { useSelector } from "react-redux"
import { selectSearchResults } from "./searchResultsSlice"
import { selectSubredditResults } from "../subreddits/subredditsSlice";
import { selectCurrentSubreddit } from "../subreddits/subredditsSlice";

export function SearchResults() {
  const searchResults = useSelector(selectSearchResults);
  const subredditResults = useSelector(selectSubredditResults);
  const title = useSelector(selectCurrentSubreddit);

  const results = () => {
    if(searchResults.length) {
      return searchResults;
    } else {
      return subredditResults;
    }
  }

  return (
    <div className='flex flex-col text-center'>
      <span className='font-bold text-2xl mb-1 text-green-600 xl:text-5xl' data-testid='subreddit_title'>{title && title}</span>
      <div className='flex flex-col text-start md:flex-row md:flex-wrap md:justify-center xl:px-5'>
        {results().map(result => {
          return <ResultCard key={result.id} result={result} />
        })}
      </div>
    </div>
  )
}