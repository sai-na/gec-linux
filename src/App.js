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




function App() {
  return (
    <div className="App text-white sm:mx-5  ">
      <Router>

        <Navbar />
        <Routes>

          <Route exact path="/" element={


            <div className="mx-32">

              <Title />
              <Hr />
              <CodeBox />
              <GetCode />
              <Hr />
              <WorkshopSections /><br />
            </div>



          } />

          <Route exact path="/WS" element={<WS />} />
          <Route exact path="/WS/Introduction" element={<div className="mx-32">< Introduction /></div>} />
          <Route exact path="/WS/Tree" element={<div className="mx-32"><Tree /></div>} />
          <Route exact path="/WS/File" element={<div className="mx-32"><File /></div>} />
          <Route exact path="/WS/Directory" element={<div className="mx-32"><Directory /></div>} />
          <Route exact path="/WS/Cat" element={<div className="mx-32"><Cat /></div>} />


        </Routes>
      </Router >
    </div>
  )
}

export default App
