import { Routes, Route } from 'react-router-dom'
import './App.css'
import ProjectListPage from './pages/projectListPage'
import ProjectDetailPage from './pages/projectDetailPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<ProjectListPage />} />
      <Route path="/project/:id" element={<ProjectDetailPage />} />
    </Routes>
  )
}

export default App
