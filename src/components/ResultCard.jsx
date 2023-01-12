import moment from "moment/moment"

export function ResultCard(props) {
  console.log(props);

  return (
    <div className='flex justify-center px-5 pt-7 last:pb-7 xl:pt-10'>
      <div className='bg-zinc-800 flex flex-col items-center h-72 rounded-3xl w-72 xl:h-80 xl:w-80'>
        <div className='py-3 font-medium text-xl'>
          {props.result.title}
        </div>
        <div className='px-3'>
          <img src={props.result.url} alt="Image of post" className='max-h-44 max-w-60 rounded-lg xl:max-h-52 xl:max-w-64' />
        </div>
        <div className='flex gap-14 mt-auto mb-4 xl:gap-24'>
          <span>{moment.unix(props.result.created_utc).fromNow()} hours ago</span>
          <span>{props.result.num_comments} comments</span>
        </div>
      </div>
    </div>
  )
}