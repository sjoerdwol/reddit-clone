import { NavBar } from "../components/NavBar"
import { SearchBar } from "../components/SearchBar"
import { Startpage } from "../components/Startpage"
import { SearchResults } from "../features/SearchResults"

function App() {

  return (
    <div>
      <NavBar />
      <SearchBar />
      <Startpage />
      <SearchResults />
    </div>
  )
}

export default App
