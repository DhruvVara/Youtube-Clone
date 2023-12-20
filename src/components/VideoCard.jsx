import React from 'react'
const VideoCard = ({info,isOpen}) => {

    const {snippet,statistics}=info;
    const {channelTitle, title,thumbnails}=snippet;

  return (
    <>
      <div className={`p-2 ${!isOpen?"mx-3 w-[350px]":"mx-6 w-96"} my-3 shadow-md rounded-lg cursor-pointer hover:shadow-2xl`}>
        <img className={`rounded-lg ${!isOpen?"w-62":"w-96"}`} src={thumbnails?.medium?.url} alt='thumbnail'/>
        <ul >
            <li className='font-bold h-12 overflow-hidden'>{title}</li>
            <li className='text-xs'>{channelTitle}</li>
            <li className='text-xs'>{statistics.viewCount} views</li>
        </ul>
      </div>
    </>
  )
}

export default VideoCard
