import React from 'react'
import WS from '../WS'

function Cat() {

    const title = <p> 2| Con<span className='text-firebaseYellow'>cat</span>enate</p>
    const subtitle = <span className='text-firebaseYellow'> Linux commands </span>
    const prev = 'File'
    const next = 'Directory'
    return (
        <>

            <WS title={title} subtitle={subtitle} prev={prev} next={next} />


        </>
    )
}

export default Cat