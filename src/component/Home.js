import React, { useContext, useEffect} from 'react'
import Notescontext from '../context/notes/notescontext'
import Noteitem from './Noteitem';
import Addnotes from './Addnotes';
// import { useHref } from 'react-router-dom';
const Home = () => {
  const { totalnotes, getnotes} = useContext(Notescontext);
  useEffect(() => { getnotes() }, [])
  
  // const ref = useRef(null) , useRef 
  return (
    <>
      <Addnotes/>
      <div className="container">
        <h2>YOUR notes</h2>
        <div className="row">
          {totalnotes.map((note) => {
            return <Noteitem key={note._id} note={note} />
          })}
        </div>
      </div>

    </>
  )
}

export default Home
