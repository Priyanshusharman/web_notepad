import React, { useContext } from 'react'
import Notescontext from '../context/notes/notescontext'
import Noteitem from './Noteitem';
import Addnotes from './Addnotes';
const Home = () => {
  const { totalnotes } = useContext(Notescontext);
  return (
    <>
      <Addnotes />
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
