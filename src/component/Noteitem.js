import React,{useContext, useEffect} from 'react'
import notescontext from '../context/notes/notescontext';
const Noteitem = (props) => {
    const {deletenotes,updatenotes}=useContext(notescontext)
    const { note } = props;
    const deleten=()=>{
        deletenotes(note._id)
    }
    const name=document.querySelector("#notes_name");
    const tag=document.querySelector("#tag");
    const notes=document.querySelector("#notes");
    const editn= async ()=>{
        await updatenotes(note._id,name.value,notes.value,tag.value);
    }
    const update = () => {
        console.log("update")
        name.value=note.notes_name;
        tag.value=note.tag;
        notes.value=note.notes;
        const edit =document.querySelector("#editnote");
        edit.onclick = editn;
    }
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.notes_name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary d-flex ml-3 align-item-center">{note.tag}
                    <i className="fa-regular fa-trash-can mx-3" onClick={deleten}></i>
                    <i className="fa-regular fa-pen-to-square float-right" onClick={update}></i></h6>
                    <p className="card-text">{note.notes}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
