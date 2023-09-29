import React,{useState} from "react";
import notescontext from "./notescontext";
const Notestate=(props)=>{
    const inotes=[
        {
          "_id": "64f56dc155b90c16009686ae",
          "user": "64ec393bd1d8df0b87e4bf09",
          "notes_name": "finaly got her name",
          "notes": "nitu is false she name is ria",
          "tag": "privat dn",
          "date": "2023-09-04T05:40:17.337Z",
          "__v": 0
        },
        {
          "_id": "65113d3e6d128f80505fa523",
          "user": "64ec393bd1d8df0b87e4bf09",
          "notes_name": "love",
          "notes": "priyanshu",
          "tag": "social",
          "date": "2023-09-25T07:56:46.533Z",
          "__v": 0
        },
        {
          "_id": "651142021b817b87b3a2b525",
          "user": "64ec393bd1d8df0b87e4bf09",
          "notes_name": "i love you",
          "notes": "priyanshu",
          "tag": "presnol",
          "date": "2023-09-25T08:17:06.251Z",
          "__v": 0
        }
      ]
      const [totalnotes,setnotes]=useState(inotes);
      //add notes
      const addnotes=({notes_name,notes,tag})=>{
        const note={
          "_id": "651142021b817b87b3a2b525",
          "user": "64ec393bd1d8df0b87e4bf09",
          "notes_name": notes_name,
          "notes": notes,
          "tag": tag,
          "date": "2023-09-25T08:17:06.251Z",
          "__v": 0
        }; 
        setnotes(totalnotes.concat(note));
      }
      //update notes
      const updatenotes=(id,notes_name,notes,tag)=>{

      }
      //delete notes
      const deletenotes=(id)=>{
        console.log(id)
        const newnotesss=totalnotes.filter((note)=>{return note._id!==id})
        setnotes(newnotesss)
      }
    return(
        <notescontext.Provider value={{totalnotes,addnotes,updatenotes,deletenotes}}>
            {props.children}
        </notescontext.Provider>
    )
}
export default Notestate;