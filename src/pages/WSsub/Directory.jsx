import React from 'react'
import CodeBox from '../../components/CodeBox'
import Heading from '../../components/Heading'
import WS from '../WS'
import BtnText from '../../components/BtnText'
import BlueText from '../../components/BlueText'
import Hr from '../../components/Hr'
import CommandText from '../../components/CommandText'

function Directory() {

    const title = <p> 2| <span className='text-firebaseYellow'>Dir</span>ectory</p>
    const subtitle = <p> File System Navigation , Crate folder , Rename folder , Moving folder , Delete folder.</p>

    const prev = 'Introduction'
    const next = 'File'



    return (
        <>
            <WS title={title} subtitle={subtitle} prev={prev} next={next} />

            <section className="-mt-6" id='whoami'>
                <Heading>File System Navigation</Heading>
                <p className='text-lg ml-2'> Commands to navigate your file system are very important. You will be using them all the time. You won't remember every single command that you use, but these are the ones that you should remember.   </p>
                <CodeBox>

                    <ul class="list-disc marker:text-lightYellow  mr-3 mt-3 ml-4">
                        <li className='my-1'>
                            pwd <CommandText> Lists the path to the working directory </CommandText>

                        </li>
                        <li className='my-1'>
                            ls  <CommandText> List directory contents   </CommandText>

                        </li>
                        <li className='my-1'>
                            ls -r   <CommandText> List contents reverse order </CommandText>

                        </li>
                        <li className='my-1'>
                            cd   <CommandText> Change directory to home </CommandText>

                        </li>
                        <li className='my-1'>
                            cd [dirname]   <CommandText> Change directory to specific </CommandText>
                            <br />   <BlueText>Example</BlueText> <br />
                            cd example
                        </li>
                        <li className='my-1'>
                            cd ..   <CommandText> Change to parent directory </CommandText>

                        </li>

                    </ul>

                </CodeBox>

            </section>

            <Hr />

            <section className="mt-6" id='open'>
                <Heading>Opening a Folder or File</Heading>
                <p className='text-lg ml-2'>If you want to open a file or a folder in the GUI from your terminal.
                </p>
                <CodeBox>


                    xdg-open [dirname]
                    <br />   <BlueText>Example</BlueText> <br />
                    xdg-open example




                </CodeBox>

            </section>


            <Hr />

            <section className="mt-6" id='mkdir'>
                <Heading>Create folder</Heading>
                {/* <p className='text-lg ml-2'>If you want to open a file or a folder in the GUI from your terminal.
                </p> */}
                <CodeBox>


                    mkdir [dirname] <CommandText>Make directory   </CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    mkdir example2




                </CodeBox>

            </section>


            <Hr />
            <section className="mt-6" id='touch'>
                <Heading>Create  File</Heading>
                {/* <p className='text-lg ml-2'>If you want to open a file or a folder in the GUI from your terminal.
                </p> */}
                <CodeBox>


                    touch [dirname] <CommandText>Create file  </CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    touch example.txt




                </CodeBox>

            </section>


            <Hr />
            <section className="mt-6" id='rename'>
                <Heading>Rename folder</Heading>
                {/* <p className='text-lg ml-2'>If you want to open a file or a folder in the GUI from your terminal.
                </p> */}
                <CodeBox>


                    mv [Old_folder] [New_folder]<CommandText>Rename folder </CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    mv example  example100




                </CodeBox>

            </section>
            <Hr />
            <section className="mt-6" id='mv'>
                <Heading>Move folder</Heading>
                {/* <p className='text-lg ml-2'>If you want to open a file or a folder in the GUI from your terminal.
                </p> */}
                <CodeBox>


                    mv [source] [target]<CommandText>Move folder </CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    {/* <CommandText>touch file.txt </CommandText> */}
                    mv example  src/example




                </CodeBox>

            </section>


            <Hr />
            <section className="mt-6" id='Delete'>
                <Heading> Delete folder</Heading>
                {/* <p className='text-lg ml-2'>If you want to open a file or a folder in the GUI from your terminal.
                </p> */}
                <CodeBox>


                    rm -r [dirname]  <CommandText> Remove directory </CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    rm -r  example100
                    <Hr />
                    rm -rf [dirname]   <CommandText> Remove directory with contents    </CommandText>
                    <br />   <BlueText>Example</BlueText> <br />
                    rm -rf example




                </CodeBox>

            </section>


            <Hr />

        </>
    )
}

export default Directory