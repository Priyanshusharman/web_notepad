import React, { useState } from "react";
import notescontext from "./notescontext";

const Notestate = (props) => {
  const [totalnotes, setnotes] = useState([]);
  //get notes
  const getnotes = async () => {
    if(!localStorage.getItem('token')){
    window.location.pathname="/login";}
    const requestOptions = {
      method: 'Get',
      headers:
      {
        'auth-token': localStorage.getItem('token')
      }
    };
    const fatchnotes = await fetch('http://localhost:7000/api/notes/getnotes', requestOptions)
    const json = await fatchnotes.json();
    // console.log(json)
    setnotes(json);
  }
  //add notes
  const addnotes =async ({ notes_name, notes, tag }) => {
    //in server
    const requestOptions = {
      method: 'post',
      headers:
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({
        "notes_name": notes_name,
        "notes": notes,
        "tag": tag,
      })
    };
    await fetch('http://localhost:7000/api/notes/addnotes', requestOptions)
    getnotes();
    //in client side
    // const note = {
    //   "_id": "651142021b817b87b3a2b525",
    //   "user": "64ec393bd1d8df0b87e4bf09",
    //   "notes_name": notes_name,
    //   "notes": notes,
    //   "tag": tag,
    //   "date": "2023-09-25T08:17:06.251Z",
    //   "__v": 0
    // };
    // setnotes(totalnotes.concat(note));
  }
  //update notes
  const updatenotes =async(id, notes_name, notes, tag) => {
    const requestOptions = {
      method: 'put',
      headers:
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({
        "notes_name": notes_name,
        "notes": notes,
        "tag": tag,
      })
    };
    await fetch(`http://localhost:7000/api/notes/update/${id}`, requestOptions)
    getnotes();
  }
  //delete notes
  const deletenotes =async (id) => {
    await fetch(`http://localhost:7000/api/notes/delete/${id}`,{
      method: 'delete',
      headers:
      {
        'auth-token': localStorage.getItem('token')
      }
    })
    getnotes();
    // const newnotesss = totalnotes.filter((note) => { return note._id !== id })
    // setnotes(newnotesss)
  }
  const clear=()=>{
    document.querySelector("#notes_name").value="";
    document.querySelector("#tag").value="";
    document.querySelector("#notes").value="";
  }
  const [de, setde] = useState(-1);
  return (
    <notescontext.Provider value={{ totalnotes, addnotes, updatenotes, deletenotes, getnotes ,clear,de, setde}}>
      {props.children}
    </notescontext.Provider>
  )
}
export default Notestate;