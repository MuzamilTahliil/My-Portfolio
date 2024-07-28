import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
    <About />
    <Skills />
    <Project />
    <Contact />
    
  </React.StrictMode>,
)
