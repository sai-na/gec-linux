

function GetCode() {
    return (
        <div className='mb-5  mx-5 mt-10'>
            <div className=" mt-3 font-sans font-semibold text-lg md:text-5xl"> {'>'} Requirements  </div>
            {/* <ol >
                <li className='mt-5 text-lg'> <span className=''>Fork</span> this repo on Github</li>
            </ol> */}
            <div className="mx-8">

                <ol class=" mt-5  marker:text-white     md:text-2xl list-decimal md:mx-3 list-inside">

                    <a href='https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview'>  <li className='text-firebaseYellow underline'>Install Ubuntu</li>
                    </a>
                </ol>
            </div>
            {/* <CodeBox > git clone https://github.com/sai-na/linux-commandes-gec</CodeBox> */}
        </div>
    )
}

export default GetCode