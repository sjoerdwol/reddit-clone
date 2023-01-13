import { ResultCard } from "../../components/ResultCard"
import { useSelector } from "react-redux"
import { selectSearchResults } from "./searchResultsSlice"
import { selectSubredditResults } from "../subreddits/subredditsSlice";

export function SearchResults() {
  const searchResults = useSelector(selectSearchResults);
  const subredditResults = useSelector(selectSubredditResults);

  const results = () => {
    if(searchResults.length) {
      return searchResults;
    } else {
      return subredditResults;
    }
  }

  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center xl:px-5'>
      {results().map(result => {
        return <ResultCard key={result.id} result={result}/>
      })}
    </div>
  )
}