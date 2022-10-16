import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Navbar from "./components/Navbar"
import Title from "./components/Title"
import GetCode from "./components/GetCode"
import Hr from "./components/Hr"
import CodeBox from "./components/CodeBox"
import WorkshopSections from "./components/WorkshopSections"
import WS from "./pages/WS"
import Introduction from "./pages/WSsub/Introduction"
import Tree from "./pages/WSsub/Tree"
import File from "./pages/WSsub/File"
import Directory from "./pages/WSsub/Directory"
import Cat from "./pages/WSsub/Cat"
import Footer from "./components/Footer"




function App() {
  return (

    <Router>
      <>
        <div className="App text-white sm:mx-5 mx-1 ">
          <Navbar />
          <Routes>

            <Route exact path="/" element={


              <div className="sm:mx-32">

                <Title />
                <Hr />

                <GetCode />
                <Hr />
                <WorkshopSections /><br />

              </div>



            } />

            <Route exact path="/WS" element={<WS />} />
            <Route exact path="/WS/Introduction" element={<div className="md:mx-32 mx-3">< Introduction /></div>} />
            <Route exact path="/WS/Tree" element={<div className="md:mx-32 mx-3"><Tree /></div>} />
            <Route exact path="/WS/File" element={<div className="md:mx-32 mx-3"><File /></div>} />
            <Route exact path="/WS/Directory" element={<div className="md:mx-32 mx-3"><Directory /></div>} />
            <Route exact path="/WS/Cat" element={<div className="md:mx-32 mx-3"><Cat /></div>} />


          </Routes>
        </div >
        <hr class=" w-full mt-6 h-px bg-firebaseYellow  border-0 " />
        <Footer /> </>
    </Router >

  )
}

export default App
