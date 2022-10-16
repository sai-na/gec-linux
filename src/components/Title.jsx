import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { TbBrandInstagram } from 'react-icons/tb'

function Title() {
    return (
        <>
            <div className=' mt-32 mb-5 '>
                <opensans className='text-8xl'><div className="flex ">Linux <img src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg" alt="" className='w-20 h-20 ml-10' /> <br /></div>  <span className='text-firebaseYellow'> Commands </span>   </opensans>

                <div className="flex  items-center mt-6 ">

                    <img src="https://frontend-masters-firebase.web.app/de-profile.png" alt="linux" className='w-20 h-20  mr-5' />
                    <div className="flex flex-col justify-start items-start">
                        <div className='font-bold mb-1'> Sai Nath A</div>
                        <a href='https://github.com/sai-na'> <div className=' flex mb-0 items-center'><BsGithub className='mr-1' /> <span className='text-firebaseYellow'>@sai-na</span></div>
                        </a>
                        <a href='https://instagram.com/_sai_nath_a'> <div className=' flex items-center'><TbBrandInstagram className='mr-1 text-lg' /> <span className='text-firebaseYellow'>@_sai_nath_a</span></div>
                        </a>   </div>
                </div>

                <div className=" font-mono  text-base mt-10 ml-10   font-semibold">MISSION</div>
                <div className=" mt-3 font-sans text-4xl"> {'>'} Familiarize with <span className='text-firebaseYellow'> Linux commands </span> </div>

            </div>

        </>)
}

export default Title