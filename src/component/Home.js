import React, { useContext } from 'react'
import Notescontext from '../context/notes/notescontext'
import Noteitem from './Noteitem';
const Home = () => {
  const { notes, setnotes } = useContext(Notescontext);
  return (
    <div className='container'>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button className='btn btn-primary'>notes</button>
      <h2>YOUR notes</h2>
      <div className="row">
        {notes.map((note) => {
          return <Noteitem note={note} />
        })}
      </div>


    </div>
  )
}

export default Home
