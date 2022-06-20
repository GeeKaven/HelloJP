import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/HomePage"
import Verb from "./pages/VerbPage"
import VerbDeform from "./pages/VerbPage/VerbDeform"

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="verbs" element={<Verb />}/>
          <Route path="verbs/:deform" element={<VerbDeform />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
