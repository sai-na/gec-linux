import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { TbBrandInstagram } from 'react-icons/tb'

function Title() {
    return (
        <>
            <div className=' mt-8 mx-5 md:mt-32 mb-5 '>
                <opensans className='text-5xl font-semibold  sm:text-8xl'><div className="flex ">Linux <img src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg" alt="" className='md:w-20 w-12 h-12 ml-4 md:h-20 md:ml-10' /> <br /></div>  <span className='text-firebaseYellow'> Commands </span>   </opensans>

                <div className="flex  items-center mt-6 ">

                    <img src="https://firebasestorage.googleapis.com/v0/b/linux-gec.appspot.com/o/sai.jpg?alt=media&token=5f6ee1c1-2e7f-4365-9f0f-e8f9d50417fb" alt="" className='w-20 h-20 rounded-full mr-5' />
                    <div className="flex flex-col justify-start items-start">
                        <div className='font-bold mb-1'> Sai Nath A</div>
                        <a href='https://github.com/sai-na'> <div className=' flex mb-0 items-center'><BsGithub className='mr-1' /> <span className='text-firebaseYellow'>@sai-na</span></div>
                        </a>
                        <a href='https://instagram.com/_sai_nath_a'> <div className=' flex items-center'><TbBrandInstagram className='mr-1 text-lg' /> <span className='text-firebaseYellow'>@_sai_nath_a</span></div>
                        </a>   </div>
                </div>

                <div className=" font-mono  text-base mt-10 ml-10   font-semibold">MISSION</div>
                <div className=" mt-3 font-sans md:text-4xl"> {'>'} Familiarize with <span className='text-firebaseYellow'> Linux commands </span> </div>

            </div>

        </>)
}

export default Title