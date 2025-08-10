// -------------------- src/App.jsx --------------------
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import BlogPreview from './components/BlogPreview'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AIAssistant from './components/AIAssistant'

export default function App(){
  const [dark, setDark] = useState(false)

  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add('dark')
    } else document.documentElement.classList.remove('dark')
  },[dark])

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header dark={dark} setDark={setDark} />
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <BlogPreview />
        <Contact />
        <Footer />
      </main>

      <AIAssistant apiUrl={import.meta.env.VITE_AI_URL || 'https://your-ai-endpoint.example.com/ask'} apiKey={import.meta.env.VITE_AI_KEY || ''} />
    </div>
  )
}