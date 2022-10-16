import React from 'react'
import CodeBox from '../../components/CodeBox'
import Heading from '../../components/Heading'
import WS from '../WS'
import BtnText from '../../components/BtnText'
import BlueText from '../../components/BlueText'
import Hr from '../../components/Hr'
import CommandText from '../../components/CommandText'
import RedText from '../../components/RedText'

function Tree() {


    const title = <p className=''> 5| Tree 🌳</p>
    const subtitle = <p> Install tree🔽, Use tree</p>
    const prev = 'Cat'
    const next = null


    return (
        <>

            <WS title={title} subtitle={subtitle} prev={prev} next={next} />


            <section className="mt-6" id='installtree'>


                <Heading>Install tree 🔽</Heading>
                <p className='text-lg ml-2'>
                </p>
                <CodeBox>
                    apt-get update <CommandText> update ubuntu </CommandText>  <br />
                    sudo apt-get install tree <CommandText> Install tree</CommandText>
                </CodeBox>

            </section>
            <Hr />
            <section className="mt-6" id='installtree'>


                <Heading>Use tree</Heading>
                <p className='text-lg ml-2'>
                </p>
                <CodeBox>
                    tree -a ./GFG  <CommandText>  Display the tree hierarchy of a directory   </CommandText>

                </CodeBox>

            </section>
        </>
    )
}

export default Tree