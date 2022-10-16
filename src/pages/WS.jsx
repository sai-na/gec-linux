import React from 'react'
import Hr from '../components/Hr'
import { Link } from 'react-router-dom'

function WS({ title, subtitle, prev, next }) {
    return (
        <>
            <div className='mt-5 md:mt-32 mb-5   '>
                <opensans className=' text-3xl md:text-8xl'>  {title}    </opensans>



                <div className=" ml-2 md:ml-5 mt-5 md:mt-12 font-sans text-base md:text-2xl" style={{ color: "#cfcfcf" }}>  {subtitle}</div>

            </div>

            <div className=" mt-5 mb-3 ml-7" style={{ color: "#cfcfcf" }}>
                {prev && <>  Prev :  <Link to={`/WS/${prev}`} className='text-white underline hover:text-firebaseYellow '>{prev}   </Link>&nbsp;
                </>}

                {next && <>  {prev && <>/ &nbsp; </>}Next : <Link to={`/WS/${next}`} className='ml-3 text-white underline hover:text-firebaseYellow'>{next}</Link>
                </>}
            </div>
            <Hr />
        </>
    )
}

export default WS