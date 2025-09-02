import { useState } from 'react'
import { Portfolio } from "@/components/Portfolio"
import { Projects } from "@/components/Projects"

function App() {
  const [currentPage, setCurrentPage] = useState('portfolio')

  if (currentPage === 'projects') {
    return <Projects onBack={() => setCurrentPage('portfolio')} />
  }

  return <Portfolio onViewProjects={() => setCurrentPage('projects')} />
}

export default App
