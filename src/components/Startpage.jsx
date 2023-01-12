import { AiOutlineReddit } from 'react-icons/ai';

export function Startpage() {
  return (
    <div className='flex flex-col items-center h-auto text-center w-full'>
      <AiOutlineReddit className='text-7xl text-green-600 lg:text-8xl xl:text-9xl' />
      <span className='font-semibold text-2xl mb-1 text-green-600 xl:text-5xl'>Welcome!</span>
      <span className='font-medium text-xl xl:text-4xl'>Please choose a category <br /> or enter a search term</span>
    </div>
  )
}