import React ,{useContext,useState} from 'react'
import notescontext from '../context/notes/notescontext'
const Addnotes = () => {
   const {addnotes}=useContext(notescontext)
   const note={
    notes_name:"",notes:"",tag:""
   }
   const [adnote,setnote]=useState(note);
   const onchange=(e)=>{
    setnote({...adnote,[e.target.name]:e.target.value})
   }
   const addnotesto=(e)=>{
    e.preventDefault()
    console.log("add",e)
    addnotes(adnote)
   }
  return (
    <div className='container'>
      <div className="mb-3">
        <label htmlFor="notes_name" className="form-label">Title</label>
        <input type='text' className="form-control" id="notes_name" name='notes_name' rows="3" onChange={onchange}></input>
        <label htmlFor="tag" className="form-label" >Sub Title</label>
        <input type="text" className="form-control" id="tag" name='tag' placeholder="name@example.com" onChange={onchange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="notes" className="form-label">Title</label>
        <textarea className="form-control" id="notes" name='notes' rows="3" onChange={onchange}></textarea>
      </div>
      <button className='btn btn-primary' onClick={addnotesto}>Add</button>
    </div>
  )
}

export default Addnotes
