import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(()=>{
    fetch('featured-jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
  }, [])
  return (
    <>
      <h1>Largest Heading</h1>

    </>
  )
}

export default App
