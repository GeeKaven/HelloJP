import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/HomePage"
import Verb from "./pages/VerbPage"
import Conjugation from "./pages/VerbPage/ConjugationPage"

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="verbs" element={<Verb />}/>
          <Route path="verbs/:kana" element={<Conjugation />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
