import React,{useState} from "react";
import notescontext from "./";
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
      const [notes,setnotes]=useState(inotes)
    return(
        <notescontext.Provider value={{notes,setnotes}}>
            {props.children}
        </notescontext.Provider>


    )
}
export default Notestate;