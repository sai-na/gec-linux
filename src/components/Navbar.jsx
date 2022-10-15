import React from 'react'

function Navbar() {
    return (
        <nav className=" mt-4 font-sans text-white flex flex-col text-center sm:flex-row sm:text-left sm:justify-end py-4 px-6   sm:items-baseline w-full">
            {/* <div className="mb-2 sm:mb-0">
                <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a>
            </div> */}
            <div className='sm:justify-between flex'>
                <a href="/one" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 sm:ml-10">One</a>
                <a href="/two" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 sm:ml-10">Two</a>
                <a href="/three" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 sm:ml-10 sm:mr-40">Three</a>
            </div>
        </nav>
    )
}

export default Navbar