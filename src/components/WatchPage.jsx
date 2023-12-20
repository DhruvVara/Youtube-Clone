import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../store/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import Livechat from './Livechat';
import VideoCard from './VideoCard';
import store from '../store/store';

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();


    useEffect(() => {
        dispatch(closeMenu());
    }, [])
    return (
        <>
            <div className='flex justify-between w-full p-8 px-20'>
                <div className=''>
                    <iframe width="900" className='rounded-xl'
                        height="500"
                        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                    <CommentContainer />
                </div>
                <div>
                    <Livechat />

                </div>
            </div>
        </>
    )
}

export default WatchPage;
