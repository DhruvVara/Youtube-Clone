import React from 'react'

const Comments = ({ data }) => {

    const { name, text, replies } = data;
    return (
        <>
            <div className='flex bg-gray-100 mt-2 py-2 rounded-lg px-2'>
                <img className='w-8 h-8' src='data:image/png;base64,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' alt='user' />
                <div className='ml-2'>
                    <p className='font-bold'>{name}</p>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default Comments;
