import React from "react";
import notescontext from "./notescontext";
const notestate=(props)=>{
    const state={
        "name":"priyanshu",
        "tilent":"i love"
    }
    return(
        <notescontext.Provider value={state}>
            {props.children}
        </notescontext.Provider>


    )
}
export default notestate;