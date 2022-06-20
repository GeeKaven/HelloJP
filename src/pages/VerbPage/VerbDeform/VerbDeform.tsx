import { useParams } from "react-router-dom"

function VerbDeform() {
  let { deform } = useParams()
  return (
    <div>
      <h1>Verb Deform</h1>
      <p>
        This is the {deform} page.
      </p>
    </div>
  )
}

export default VerbDeform