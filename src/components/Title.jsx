import React from 'react'
import { BsGithub } from 'react-icons/bs'

function Title() {
    return (
        <>
            <div className='text-white mx-32  mt-32 mb-5 '>
                <openSans className='text-8xl'><div className="flex ">Linux <img src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg" alt="linux" className='w-20 h-20 ml-10' /> <br /></div>  <span className='text-firebaseYellow'> Commands </span>   </openSans>

                <div className="flex items-center mt-6 ">

                    <img src="https://frontend-masters-firebase.web.app/de-profile.png" alt="linux" className='w-20 h-20  mr-5' />
                    <div className="flex flex-col items-center">
                        <div className='font-bold mb-1'> Sai Nath A</div>
                        <a href='https://github.com/sai-na'> <div className=' flex items-center'><BsGithub className='mr-1' /> <span className='text-firebaseYellow'>@sai-na</span></div>
                        </a>  </div>
                </div>

                <div className=" font-mono  text-base mt-10 ml-10 font-semibold">MISSION</div>
                <div className="font-sans"> {'>'} Familiarize with linux command </div>

            </div>

        </>)
}

export default Title