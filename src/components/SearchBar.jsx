export function SearchBar() {
  return (
    <div className='px-10 py-7 w-full'>
      <div className='bg-gray-300 flex h-10 items-center justify-center rounded-full w-full'>
        <input className='bg-transparent h-full placeholder-gray-500 text-gray-700 w-5/6' placeholder='Search...' />
      </div>
    </div>
  )
}