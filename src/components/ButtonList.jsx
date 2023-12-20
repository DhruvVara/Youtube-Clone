import React from 'react'
import Button from './Button'

const list = ["All","Cricket","News","Music","Movies","Live","Trendings","Shorts"]

const ButtonList = () => {
    return (
        <div className='flex py-2 pl-5'>
            {list.map((item) => {
                return(

                    <Button name={item} />
                )
            })}
        </div>
    )
}

export default ButtonList
