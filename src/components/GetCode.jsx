import React from 'react'
import CodeBox from './CodeBox'

function GetCode() {
    return (
        <div className='mb-5  mt-10'>
            <div className=" mt-3 font-sans font-semibold text-5xl"> {'>'} Get the code </div>
            {/* <ol >
                <li className='mt-5 text-lg'> <span className=''>Fork</span> this repo on Github</li>
            </ol> */}
            <div className="mx-8">

                <ol class=" mt-5  marker:text-white     text-2xl list-decimal mx-3 list-inside">

                    <a href='https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview'>  <li className='text-firebaseYellow underline'>Install Ubuntu</li>
                    </a>
                </ol>
            </div>
            <CodeBox > git clone https://github.com/sai-na/linux-commandes-gec</CodeBox>
        </div>
    )
}

export default GetCode