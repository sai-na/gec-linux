import React from 'react'
import { HashLink } from 'react-router-hash-link'


function WorkshopSections() {
    return (
        <div className='mb-5  mt-10'>
            <div className=" mt-3 font-sans font-semibold text-5xl"> {'>'} Workshop Sections </div>

            <div className="mx-8">

                <div class=" mt-10 list-decimal mx-3 list-inside">
                    <HashLink to="/WS/Introduction"> <span className='text-firebaseYellow mr-2   text-2xl '> <div className="flex items-center"></div>1|</span>
                        <span className='hover:text-firebaseYellow hover:underline text-2xl font-base '>Introduction</span>  </HashLink>
                    <div className="ml-8 text-gray-400">Opening a terminal , Text size ,Key Commands & Navigation , Ls , Whoami , Date .</div>

                </div>

                <div class=" mt-10 list-decimal mx-3 list-inside">
                    <HashLink to="/WS/Directory "> <span className='text-firebaseYellow mr-2   text-2xl '> <div className="flex items-center"></div>2|</span>
                        <span className='hover:text-firebaseYellow hover:underline text-2xl font-base '>Directory </span>  </HashLink>
                    <div className="ml-8 text-gray-400">File System Navigation , Crate folder , Rename folder , Delete folder ,  Moving folder.</div>

                </div>

                <div class=" mt-10 list-decimal mx-3 list-inside">
                    <HashLink to="/WS/Cat "> <span className='text-firebaseYellow mr-2   text-2xl '> <div className="flex items-center"></div>2|</span>
                        <span className='hover:text-firebaseYellow hover:underline text-2xl font-base '>Cat </span>  </HashLink>
                    <div className="ml-8 text-gray-400">Display file, Crate File, Modify content , Show line numbers, Less.</div>

                </div>

                <div class=" mt-10 list-decimal mx-3 list-inside">
                    <HashLink to="/WS/File "> <span className='text-firebaseYellow mr-2   text-2xl '> <div className="flex items-center"></div>3|</span>
                        <span className='hover:text-firebaseYellow hover:underline text-2xl font-base '>File </span>  </HashLink>
                    <div className="ml-8 text-gray-400">Read File, Crate File , Rename File , Delete File , Moving File.</div>

                </div>
                <div class=" mt-10 list-decimal mx-3 list-inside">
                    <HashLink to="/WS/Tree "> <span className='text-firebaseYellow mr-2   text-2xl '> <div className="flex items-center"></div>4|</span>
                        <span className='hover:text-firebaseYellow hover:underline text-2xl font-base '>Tree </span>  </HashLink>
                    <div className="ml-8 text-gray-400">Install tree , Use tree.</div>

                </div>


            </div>

        </div>
    )
}

export default WorkshopSections