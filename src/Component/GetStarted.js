import React from 'react'

const GetStarted = (props) => {
    return (
        <>
            <button className=' text-gray-800  hover:text-white py-1 w-24 ml-6 md:ml-0 md:px-1  rounded md:ml-8 bg-gradient-to-r from-green-500 to-green-300 hover:from-indigo-600 hover:to-indigo-400 duration-500 '>
                {props.children}
            </button>
        </>
    )
}

export default GetStarted