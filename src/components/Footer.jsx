import React from 'react'
import { DiMitlicence } from 'react-icons/di'
import Hr from './Hr'

function Footer() {
    const footerYear = new Date().getFullYear()
    return (
        <footer className=' w-full   '>

            <div className='w-full '>

                <p className='text-xl flex text-white justify-center items-center p-12'> <DiMitlicence className='text-2xl mr-2 font-bold' /> {footerYear} All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer