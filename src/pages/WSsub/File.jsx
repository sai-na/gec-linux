import React from 'react'
import CodeBox from '../../components/CodeBox'
import Heading from '../../components/Heading'
import WS from '../WS'
import BtnText from '../../components/BtnText'
import BlueText from '../../components/BlueText'
import Hr from '../../components/Hr'
import CommandText from '../../components/CommandText'

function File() {

    const title = <p> 3| F<span className='text-firebaseYellow'>i</span>le</p>
    const subtitle = <p className='ml-4'> Create  File 🖍, Copy  File ✂️ 📋, Delete file 🗑️.</p>

    const prev = 'Directory'
    const next = 'Cat'






    return (
        <>
            <WS title={title} subtitle={subtitle} prev={prev} next={next} />

            <section className="mt-6" id='less'>
                <Heading>Display  File 💻</Heading>
                <p className='text-lg ml-2'>The <BtnText>less</BtnText> command is used to view the contents of a file. It is similar to the  <BtnText>cat</BtnText> command, but it allows you to scroll up and down. </p>
                <CodeBox>


                    less [filename] <CommandText>Display  File </CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    less example.txt




                </CodeBox>

            </section>

            <Hr />

            <section className="mt-6" id='touch'>
                <Heading>Create  File 🖍</Heading>
                {/* <p className='text-lg ml-2'>If you want to open a file or a folder in the GUI from your terminal.
                </p> */}
                <CodeBox>


                    touch [filename] <CommandText>Create file  </CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    touch example.txt




                </CodeBox>

            </section>


            <Hr />


            <section className="mt-6" id='cp'>
                <Heading>Copy  File ✂️ 📋 </Heading>
                {/* <p className='text-lg ml-2'>If you want to open a file or a folder in the GUI from your terminal.
                </p> */}
                <CodeBox>


                    cp [filename] [copyfilename]  <CommandText>Copy file  </CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    cp a.txt b.txt





                </CodeBox>

            </section>
            <Hr />
            <section className="mt-6" id='Delete'>
                <Heading> Delete file 🗑️</Heading>
                {/* <p className='text-lg ml-2'>If you want to open a file or a folder in the GUI from your terminal.
                </p> */}
                <CodeBox>


                    rm  [filename]  <CommandText> Remove directory </CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    rm  a.txt





                </CodeBox>

            </section>



        </>
    )
}

export default File