import { ResultCard } from "../../components/ResultCard"
import { useSelector } from "react-redux"
import { selectResults } from "./searchResultsSlice"

export function SearchResults() {
  const results = useSelector(selectResults);

  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center xl:px-5'>
      {results.map(result => {
        return <ResultCard key={result.id} result={result}/>
      })}
    </div>
  )
}