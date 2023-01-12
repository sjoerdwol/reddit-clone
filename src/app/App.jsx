import { useSelector } from "react-redux"

import { selectHasResult, selectError } from "../features/SearchResults/searchResultsSlice"

import { NavBar } from "../components/NavBar"
import { SearchBar } from "../components/SearchBar"
import { Startpage } from "../components/Startpage"
import { SearchResults } from "../features/SearchResults/SearchResults"
import { ErrorPage } from "../components/ErrorPage"

function App() {
  const hasResults = useSelector(selectHasResult);
  const hasError = useSelector(selectError);

  return (
    <div>
      <NavBar />
      <SearchBar />
      {!hasError ? hasResults ? <SearchResults /> : <Startpage /> : <ErrorPage /> }
    </div>
  )
}

export default App
