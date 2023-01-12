import { ResultCard } from "../components/ResultCard"

export function SearchResults() {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center'>
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
    </div>
  )
}