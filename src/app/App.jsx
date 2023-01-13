import { useSelector } from "react-redux"

import { selectSearchHasResult, selectSearchError } from "../features/SearchResults/searchResultsSlice"
import { selectSubredditHasResult, selectSubredditError } from "../features/subreddits/subredditsSlice"

import { NavBar } from "../components/NavBar"
import { SearchBar } from "../components/SearchBar"
import { Startpage } from "../components/Startpage"
import { SearchResults } from "../features/SearchResults/SearchResults"
import { ErrorPage } from "../components/ErrorPage"

function App() {
  const searchHasResults = useSelector(selectSearchHasResult);
  const searchHasError = useSelector(selectSearchError);
  const subredditHasResults = useSelector(selectSubredditHasResult);
  const subredditHasError = useSelector(selectSubredditError);
  const errorOccured = searchHasError || subredditHasError;

  return (
    <div>
      <NavBar />
      <SearchBar />
      {!errorOccured ? searchHasResults || subredditHasResults ? <SearchResults /> : <Startpage /> : <ErrorPage /> }
    </div>
  )
}

export default App
