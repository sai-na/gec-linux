import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className=" mt-4 font-sans text-white flex flex-col text-center sm:flex-row sm:text-left sm:justify-end py-4 px-6   sm:items-baseline w-full">
            {/* <div className="mb-2 sm:mb-0">
                <Link to="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</Link>
            </div> */}
            <div className='sm:justify-between flex'>
                <Link to="/" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 sm:ml-10">Home</Link>
                <Link to="/WS/Introduction" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 sm:ml-10">Intro</Link>
                <Link to="/WS/Directory" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 sm:ml-10 ">Directory</Link>
                <Link to="/WS/File" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 sm:ml-10">File</Link>
                <Link to="/WS/Cat" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 sm:ml-10">Cat</Link>
                <Link to="/WS/Tree" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 sm:ml-10 lg:mr-40">Tree</Link>

            </div>
        </nav>
    )
}

export default Navbar