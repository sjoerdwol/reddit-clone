import moment from "moment/moment"

export function ResultCard(props) {
  let title = props.result.title;
  if(title.length > 40) {
    title = title.slice(0, 40) + '...';
  }

  return (
    <div className='flex justify-center px-5 pt-7 last:pb-7 xl:pt-10'>
      <div className='bg-zinc-800 flex flex-col items-center h-72 rounded-3xl w-72 xl:h-80 xl:w-80'>
        <div className='p-3 font-medium text-xl'>
          {title}
        </div>
        <div className='px-3'>
          <img src={props.result.url} alt="Image of post" className='max-h-44 max-w-60 rounded-lg xl:max-h-48 xl:max-w-64' />
        </div>
        <div className='flex gap-14 mt-auto mb-4 xl:gap-18'>
          <span>{moment.unix(props.result.created_utc).fromNow()}</span>
          <span>{props.result.num_comments} comments</span>
        </div>
      </div>
    </div>
  )
}