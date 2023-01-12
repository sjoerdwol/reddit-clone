import { ResultCard } from "../components/ResultCard"

export function SearchResults() {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center xl:px-5'>
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
    </div>
  )
}