import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import store from '../store/store';
import { addMessage } from '../store/chatSlice';
import { generateRandomMessage, generateRandomName } from '../store/helper';

const Livechat = () => {

    const dispatch = useDispatch();

    const [livemsg, setlivemsg] = useState("");

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        setInterval(() => {
            dispatch(addMessage({ name: generateRandomName(), message: generateRandomMessage(15) }));
        }, 1500)



    }, [])

    return (
        <>
            <div className='w-[350px] h-[500px] p-2 rounded-2xl border border-black bg-slate-100 '>
                <div className='flex h-[430px] flex-col-reverse overflow-y-scroll'>
                    {chatMessages.map((mes, i) => {
                        return (

                            <ChatMessage key={i} name={mes.name} message={mes.message} />
                        )
                    })}
                </div>

                <form className='relative w-full border p-2 border-black rounded-lg z-10'
                    onSubmit={
                        (e) => {
                            e.preventDefault();
                            dispatch(addMessage({ name: "User", message: livemsg }));
                            setlivemsg("");
                        }}>
                    <input type="text" className='w-[233px] px-2 py-1 bg-transparent border border-gray-400' value={livemsg} onChange={(e) => setlivemsg(e.target.value)} />
                    <button className='border border-black py-1 px-3 bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold' >Send</button>
                </form>
            </div>
        </>
    )
}

export default Livechat;