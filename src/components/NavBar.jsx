import { AiOutlineReddit } from 'react-icons/ai';

export function NavBar() {

  return (
    <header className='flex flex-col gap-3 py-5 items-center shadow-white lg:gap-5 lg:py-7 2xl:gap-7 2xl:py-9'>
      <div className='flex items-center gap-2'>
        <AiOutlineReddit className='text-2xl text-green-600 lg:text-4xl 2xl:text-6xl' />
        <div className='font-bold lg:text-2xl 2xl:text-4xl'>
          <span className='text-green-600'>Reddit</span>Clone
        </div>
      </div>
      <nav>
        <ul className='flex gap-5 font-semibold lg:text-xl 2xl:text-3xl'>
          <li>Popular</li>
          <li>Gaming</li>
          <li>Sports</li>
        </ul>
      </nav>
    </header>
  )
}