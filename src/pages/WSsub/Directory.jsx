import React from 'react'
import CodeBox from '../../components/CodeBox'
import Heading from '../../components/Heading'
import WS from '../WS'
import BtnText from '../../components/BtnText'
import BlueText from '../../components/BlueText'
import Hr from '../../components/Hr'
import CommandText from '../../components/CommandText'

function Directory() {

    const title = <p> 1| <span className='text-firebaseYellow'>Intro</span>duction</p>
    const subtitle = <p> Opening a terminal, Text size ,Key Commands & Navigation, Ls, Whoami, Date.</p>

    const next = 'Directory'



    return (
        <>
            <WS title={title} subtitle={subtitle} prev={null} next={next} />
        </>
    )
}

export default Directory