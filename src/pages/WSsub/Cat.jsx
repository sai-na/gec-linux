import React from 'react'
import CodeBox from '../../components/CodeBox'
import Heading from '../../components/Heading'
import WS from '../WS'
import BtnText from '../../components/BtnText'
import BlueText from '../../components/BlueText'
import Hr from '../../components/Hr'
import CommandText from '../../components/CommandText'
import RedText from '../../components/RedText'


function Cat() {

    const title = <p> 4| Con<span className='text-firebaseYellow'>cat</span>enate</p>
    const subtitle = <p>Display  File 💻, Write ✍ data into file, Append ➕ data into file, Show line numbers 🔢</p>
    const prev = 'File'
    const next = 'Tree'
    return (
        <>

            <WS title={title} subtitle={subtitle} prev={prev} next={next} />

            <section className="mt-6" id='touch'>

                <p className='-mt-5 text-xl mx-1'>The cat command is a very common command and allows you to create single or multiple files, view content of a file, concatenate files and redirect output in terminal or files.
                </p>
                <Heading>Display  File 💻</Heading>
                <p className='text-lg ml-2'>The most common thing I use it for is to display the contents of a file.
                </p>
                <CodeBox>


                    cat [filename] <CommandText>Display  File </CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    cat example.txt




                </CodeBox>

            </section>

            <Hr />

            <section className="mt-6" id='touch'>


                <Heading>Write ✍ data into file</Heading>
                <p className='text-lg ml-2'>You can also write  into a file using the <BtnText>cat</BtnText>  command.
                </p>

                <CodeBox>


                    cat <RedText /> [filename] <CommandText>Display  File </CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    cat <RedText /> example.txt




                </CodeBox>

                <p className='text-lg ml-2'>This will open up a new file and you can start typing. When you are done, you can press <BtnText>Ctrl + D</BtnText> to save and exit.
                </p>

            </section>


            <Hr />



            <section className="mt-6" id='touch'>


                <Heading> Append ➕ data into file</Heading>
                <p className='text-lg ml-2'>You can also create a file using the <BtnText>cat</BtnText>  command.
                </p>

                <CodeBox>


                    cat <RedText /><RedText />[filename] <CommandText>Append  data into file</CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    cat <RedText /><RedText />example.txt




                </CodeBox>

                <p className='text-lg ml-2'>This will open up a new file and you can start typing. When you are done, you can press <BtnText>Ctrl + D</BtnText> to save and exit.
                </p>

            </section>

            <Hr />
            <section className="mt-6" id='touch'>


                <Heading>Show line numbers 🔢</Heading>
                <p className='text-lg ml-2'>You can use it to show line numbers
                </p>

                <CodeBox>


                    cat -n [filename] <CommandText>Show line numbers</CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    cat -n example.txt




                </CodeBox>

                <p className='text-lg ml-2'>There are other uses as well, but as you can see, the <BtnText>cat</BtnText>  command is very powerful 💪 .
                </p>

            </section>



        </>
    )
}

export default Cat