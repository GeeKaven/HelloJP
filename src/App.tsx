import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "@components/Layout"
import HomePage from "@components/page/HomePage"
import VerbPage from "@components/page/VerbPage"
import ConjugationPage from "@components/page/ConjugationPage"

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="verbs" element={<VerbPage />}/>
          <Route path="verbs/:kana" element={<ConjugationPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
