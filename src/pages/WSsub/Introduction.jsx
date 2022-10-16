import React from 'react'
import CodeBox from '../../components/CodeBox'
import Heading from '../../components/Heading'
import WS from '../WS'
import BtnText from '../../components/BtnText'
import BlueText from '../../components/BlueText'
import Hr from '../../components/Hr'

function Introduction() {

    const title = <p> 1| <span className='text-firebaseYellow'>Intro</span>duction</p>
    const subtitle = <p> Opening a terminal, Text size ,Key Commands & Navigation, Ls, Whoami, Date.</p>

    const next = 'Directory'



    return (
        <>
            <WS title={title} subtitle={subtitle} prev={null} next={next} />


            <div className="-mt-6   ">
                <Heading>Text size</Heading>
                <p className='text-lg ml-2'> Before we look at some common commands, I just want to note a few keyboard commands that are very helpful:
                </p>
                <CodeBox>

                    <ul class="list-disc marker:text-lightYellow  mr-3 mt-3 ml-4">
                        <li className='my-1'><BtnText> Ctrl + Shift +  Keypad Plus(+) </BtnText> :
                            Increase Terminal Text Size </li>
                        <li className='my-1'><BtnText> 	Ctrl + Keypad Minus(-)</BtnText> :  Decrease Terminal Text Size</li>

                    </ul>
                </CodeBox>
            </div>

            <Hr />


            <div className="mt-6   ">
                <Heading>Key Commands & Navigation</Heading>
                {/* <p className='text-lg ml-2'> Before we look at some common commands, I just want to note a few keyboard commands that are very helpful:
                </p> */}
                <CodeBox>

                    <ul class="list-disc marker:text-lightYellow  mr-3 mt-3 ml-4">
                        <li className='my-1'><BtnText> Up Arrow</BtnText> : Will show your last command </li>
                        <li className='my-1'><BtnText> Down Arrow</BtnText> :  Will show your next command</li>
                        <li className='my-1'><BtnText>  &nbsp; Tab  &nbsp; </BtnText> :  Will auto-complete your command</li>
                        <li className='my-1'><BtnText> Ctrl + L</BtnText> :  Will clear the screen</li>
                        <li className='my-1'><BtnText> Ctrl + C</BtnText> : Will cancel a command</li>
                        {/* <li className='my-1'><BtnText> Ctrl + R</BtnText> :  Will search for a command</li> */}
                        <li className='my-1'><BtnText> Ctrl + D</BtnText> :  Will exit the terminal</li>
                    </ul>
                </CodeBox>
            </div>


            <Hr />

            <div className="-mt-6   ">
                <Heading>Help</Heading>
                <p className='text-lg ml-2'> The command that you want to know more about and then <BtnText>--help</BtnText> and you will get similar info.
                </p>
                <CodeBox>

                    <BlueText>Example</BlueText> <br />
                    ls --help
                </CodeBox>
                <p className='text-lg ml-2' >You should be able to use the arrow keys or page up and down. When you are ready to exit, just press <BtnText>q</BtnText> .</p>
            </div>


            <Hr />



            <div className="-mt-6   ">
                <Heading>The whoami Command</Heading>
                <p className='text-lg ml-2'> The <BtnText>whoami </BtnText> command will show you the current user that you are logged in as.
                </p>
                <CodeBox>

                    <BlueText>Example</BlueText> <br />
                    ls --help
                </CodeBox>
                <p className='text-lg ml-2' >You should be able to use the arrow keys or page up and down. When you are ready to exit, just press <BtnText>q</BtnText> .</p>
            </div>


            <Hr />

        </>)
}

export default Introduction