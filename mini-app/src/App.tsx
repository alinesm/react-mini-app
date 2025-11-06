import { Routes, Route } from 'react-router-dom'
import './App.css'
import ProjectList from './pages/ProjectList'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProjectList />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
