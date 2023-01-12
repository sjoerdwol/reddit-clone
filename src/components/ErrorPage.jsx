import { AiOutlineReddit } from 'react-icons/ai';

export function ErrorPage() {
  return (
    <div className='flex flex-col items-center h-auto text-center w-full'>
      <AiOutlineReddit className='text-7xl text-green-600 lg:text-8xl xl:text-9xl rotate-180' />
      <span className='font-semibold text-2xl mb-1 text-green-600 xl:text-5xl'>Oh no!</span>
      <span className='font-medium text-xl xl:text-4xl'>An unexpected error! <br /> please try again</span>
    </div>
  )
}