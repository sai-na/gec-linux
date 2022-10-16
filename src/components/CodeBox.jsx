import React from 'react'

function CodeBox({ children }) {
    return (
        <div className="flex justify-center">

            <div className='bg-code line sm:leading-none leading-9 overflow-hidden  shadow-lg m-3 p-5 md:text-lg rounded-xl md:w-10/12 w-full'> <code> {children} </code></div>
        </div>
    )
}

export default CodeBox