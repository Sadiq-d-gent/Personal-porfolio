// -------------------- src/components/ProjectCard.jsx --------------------
import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, onPreview }){
  return (
    <motion.article whileHover={{ y:-8 }} className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800/60 transition">
      <div className="h-48 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transform hover:scale-105 transition" />
      </div>
      <div className="p-5">
        <div className="text-xs text-indigo-600 uppercase tracking-wide">Featured</div>
        <h4 className="mt-2 font-semibold text-lg">{project.title}</h4>
        <p className="mt-2 text-sm opacity-80 leading-relaxed">{project.desc}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-2">
            {project.tags.map(t=> <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{t}</span>)}
          </div>
          <button onClick={()=> onPreview(project)} className="text-sm px-3 py-2 bg-indigo-600 text-white rounded-md">Preview</button>
        </div>
      </div>
    </motion.article>
  )
}