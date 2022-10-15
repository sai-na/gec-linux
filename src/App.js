import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Navbar from "./components/Navbar"
import Title from "./components/Title"
import GetCode from "./components/GetCode"
import Hr from "./components/Hr"
import CodeBox from "./components/CodeBox"
import WorkshopSections from "./components/WorkshopSections"
import WS from "./pages/WS"
import Introdution from "./pages/WSsub/Introduction"





function App() {
  return (
    <div className="App text-white sm:mx-5 ">
      <Router>

        <Navbar />
        <Routes>

          <Route exact path="/" element={


            <div className="mx-32 ">

              <Title />
              <Hr />
              <CodeBox />
              <GetCode />
              <Hr />
              <WorkshopSections /><br />
            </div>



          } />

          <Route exact path="/WS" element={<WS />} />
          <Route exact path="/WS/Introduction" element={< Introdution />} />
          <Route exact path="/WS" element={<WS />} />
          <Route exact path="/WS" element={<WS />} />
          <Route exact path="/WS" element={<WS />} />
          <Route exact path="/WS" element={<WS />} />

        </Routes>
      </Router >
    </div>
  )
}

export default App
