import React, { useState } from "react";
import notescontext from "./notescontext";

const Notestate = (props) => {
  const [totalnotes, setnotes] = useState([]);
  //get notes
  const getnotes = async () => {
    const requestOptions = {
      method: 'Get',
      headers:
      {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzM5M2JkMWQ4ZGYwYjg3ZTRiZjA5In0sImlhdCI6MTY5NTYyODUwMH0.qajZbgtNSf34-Nit5-Aetqagz8uNyRkANU2JTqzRyks'
      }
    };
    const fatchnotes = await fetch('http://localhost:7000/api/notes/getnotes', requestOptions)
    const json = await fatchnotes.json();
    console.log(json)
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
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzM5M2JkMWQ4ZGYwYjg3ZTRiZjA5In0sImlhdCI6MTY5NTYyODUwMH0.qajZbgtNSf34-Nit5-Aetqagz8uNyRkANU2JTqzRyks'
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
      method: 'post',
      headers:
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzM5M2JkMWQ4ZGYwYjg3ZTRiZjA5In0sImlhdCI6MTY5NTYyODUwMH0.qajZbgtNSf34-Nit5-Aetqagz8uNyRkANU2JTqzRyks'
      },
      body: JSON.stringify({
        "notes_name": notes_name,
        "notes": notes,
        "tag": tag,
      })
    };
    await fetch(`http://localhost:7000/api/notes/update/${id}`, requestOptions)
  }
  //delete notes
  const deletenotes =async (id) => {
    await fetch(`http://localhost:7000/api/notes/delete/${id}`,{
      method: 'delete',
      headers:
      {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYzM5M2JkMWQ4ZGYwYjg3ZTRiZjA5In0sImlhdCI6MTY5NTYyODUwMH0.qajZbgtNSf34-Nit5-Aetqagz8uNyRkANU2JTqzRyks'
      }
    })
    getnotes();
    // const newnotesss = totalnotes.filter((note) => { return note._id !== id })
    // setnotes(newnotesss)
  }
  return (
    <notescontext.Provider value={{ totalnotes, addnotes, updatenotes, deletenotes, getnotes }}>
      {props.children}
    </notescontext.Provider>
  )
}
export default Notestate;