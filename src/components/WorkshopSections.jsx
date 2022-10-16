import React from 'react'
import { Link } from 'react-router-dom'


function WorkshopSections() {
    return (
        <div className='mb-5  mt-10'>
            <div className=" mt-3  mx-5 font-sans font-semibold text-lg md:text-5xl"> {'>'} Workshop Sections </div>

            <div className="mx-8">

                <div class=" mt-10 list-decimal mx-3 list-inside">
                    <Link to="/WS/Introduction"> <span className='text-firebaseYellow mr-2   text-base md:text-2xl '> <div className="flex items-center"></div>1|</span>
                        <span className='hover:text-firebaseYellow hover:underline text-base md:text-2xl font-base '>Introduction</span>  </Link>
                    <div className="ml-8 text-gray-400 sm:text-base text-sm"> Open terminal, Text size, Key Commands & Navigation 🧭, Help ℹ , whoami, Date 📅 . </div>

                </div>

                <div class=" mt-10 list-decimal mx-3 list-inside">
                    <Link to="/WS/Directory"> <span className='text-firebaseYellow mr-2   text-base md:text-2xl '> <div className="flex items-center"></div>2|</span>
                        <span className='hover:text-firebaseYellow hover:underline text-base md:text-2xl font-base '>Directory </span>  </Link>
                    <div className="ml-8 text-gray-400 text-sm">File System Navigation , Crate folder , Rename folder , Moving folder , Delete folder.</div>

                </div>



                <div class=" mt-10 list-decimal mx-3 list-inside">
                    <Link to="/WS/File"> <span className='text-firebaseYellow mr-2   text-base md:text-2xl '> <div className="flex items-center"></div>3|</span>
                        <span className='hover:text-firebaseYellow hover:underline text-base md:text-2xl font-base '>File </span>  </Link>
                    <div className="ml-8 text-gray-400 text-sm"> Create  File 🖍, Copy  File ✂️ 📋, Delete file 🗑️.</div>

                </div>

                <div class=" mt-10 list-decimal mx-3 list-inside">
                    <Link to="/WS/Cat"> <span className='text-firebaseYellow mr-2   text-base md:text-2xl '> <div className="flex items-center"></div>4|</span>
                        <span className='hover:text-firebaseYellow hover:underline text-base md:text-2xl font-base '>Cat </span>  </Link>
                    <div className="ml-8 text-gray-400 text-sm">Display  File 💻, Write ✍ data into file, Append ➕ data into file, Show line numbers 🔢</div>

                </div>

                <div class=" mt-10 list-decimal mx-3 list-inside">
                    <Link to="/WS/Tree"> <span className='text-firebaseYellow mr-2   text-base md:text-2xl '> <div className="flex items-center"></div>5|</span>
                        <span className='hover:text-firebaseYellow hover:underline text-base md:text-2xl font-base '>Tree </span>  </Link>
                    <div className="ml-8 text-gray-400 text-sm">Install tree🔽, Use tree.</div>

                </div>


            </div>

        </div>
    )
}

export default WorkshopSections