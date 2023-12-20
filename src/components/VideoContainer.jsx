import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../store/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import store from '../store/store';

const VideoContainer = () => {

    const [videos, setvideos] = useState([]);


    useEffect(() => {
        const getVideos = async () => {
            const data = await fetch(YOUTUBE_API);
            const json = await data.json();

            // console.log(json)
            setvideos(json?.items);

        }

        getVideos();
    }, [])

    const isOpen = useSelector((store)=>store.app.isMenuOpen);

    return (
        <>
            <div className='flex flex-wrap'>
                {videos.map((vid) => {
                    return (
                        <>
                            <Link key={vid.id} to={`/watch?v=`+vid.id}><VideoCard key={vid.id} info={vid} isOpen={isOpen}/></Link>
                        </>
                    )
                })}
            </div>

        </>
    )
}

export default VideoContainer
