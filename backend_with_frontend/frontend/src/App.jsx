import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [lines, setLines] = useState([])

  useEffect(() => {
    axios.get('/api/lines')
      .then((response) => setLines(response.data))
      .catch((error) => console.log(error))
  },[])

  return (
    <>
      <h1>Lines count: {lines.length}</h1>
      {lines.map((line) => (
        <div key={line.id}>
          <h3>Ttile: {line.title}</h3>
          <p>{line.description}</p>
        </div>))}
    </>
  )
}

export default App
