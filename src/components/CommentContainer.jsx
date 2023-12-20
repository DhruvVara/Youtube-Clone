import React from 'react'
import Comments from './Comments'

const data = [{
    name: "abc",
    text: "asdaf",
    replies: [{
        name: "abc",
        text: "asdaf",
        replies: [{
            name: "abc",
            text: "asdaf",
            replies: []
        }]
    }, {
        name: "abc",
        text: "asdaf",
        replies: []
    }]
}, {
    name: "abc",
    text: "asdaf",
    replies: []
}, {
    name: "abc",
    text: "asdaf",
    replies: []
}]

const CommentsList = ({ comments }) => {
    return comments.map((comment, i) =>
        <div>
            <Comments key={i} data={comment} />
            <div className='ml-5'>
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    )
}

const CommentContainer = () => {

    return (
        <div className='mt-5'>
            <h1 className='text-2xl font-bold'>410 Comments:</h1>
            <div className='mt-5 py-5 px-2 rounded-lg'>
                <CommentsList comments={data} />
            </div>
        </div>
    )
}

export default CommentContainer;
