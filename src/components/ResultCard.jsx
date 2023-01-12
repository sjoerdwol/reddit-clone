import img from '../../../../../../sjoer/Downloads/testimg.jpg';

export function ResultCard() {
  return (
    <div className='flex justify-center px-5 pt-7 last:pb-7 xl:pt-10'>
      <div className='bg-zinc-800 flex flex-col items-center h-72 rounded-3xl w-72 xl:h-80 xl:w-80'>
        <div className='py-3 font-medium text-xl'>
          Title
        </div>
        <div className='px-3'>
          <img src={img} alt="Image of post" className='rounded-lg' />
        </div>
        <div className='flex gap-14 mt-auto mb-4 xl:gap-24'>
          <span>8 hours ago</span>
          <span>5 comments</span>
        </div>
      </div>
    </div>
  )
}