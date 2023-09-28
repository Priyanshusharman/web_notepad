import React, { useContext } from 'react'
import notescontext from '../context/notes/notescontext'
const About = () => {
  const a=useContext(notescontext);
  return (
    <div>
      this is about{a.name}
    </div>
  )
}

export default About
