import React from 'react'
import Hr from '../components/Hr'
import { Link } from 'react-router-dom'

function WS({ title, subtitle, prev, next }) {
    return (
        <>
            <div className=' mt-32 mb-5   '>
                <opensans className='text-8xl'>  {title}    </opensans>



                <div className=" mt-12 font-sans text-4xl" style={{ color: "#cfcfcf" }}>  {subtitle}</div>

            </div>

            <div className=" mt-5 mb-3 ml-7" style={{ color: "#cfcfcf" }}>
                {prev && <>  Prev :  <Link to={`/WS/${prev}`} className='text-white underline hover:text-firebaseYellow '>{prev}   </Link>&nbsp;
                </>}

                {next && <>   / &nbsp;Next : <Link to={`/WS/${next}`} className='ml-3 text-white underline hover:text-firebaseYellow'>{next}</Link>
                </>}
            </div>
            <Hr />
        </>
    )
}

export default WS