const express = require('express')
const { body, validationResult } = require('express-validator');
const fetchuser = require('../midware/fetchuser');
const router = express.Router();
const Note=require('../modules/Notes')
//get notes http://localhost:7000/api/notes/getnotes
router.get("/getnotes", fetchuser, async (req, res) => {
    try{
    let notes = await Note.find({ user: req.user.id })
    res.json(notes)
    }
    catch(e){
        return res.json({error:"network fail"})
    }
})
//get notes http://localhost:7000/api/notes/addnotes
router.post("/addnotes", fetchuser, [
    body('notes', "note is empty you want to save").isLength({min:1}),
    body('notes_name', "intet name").isLength({ min: 1 }),
], async (req, res) => {
    let error =validationResult(req);
    if(!error.isEmpty){
        return res.status(400).json({ errors: errors.array() })
    }
    try{
    await Note.create({
        user: req.user.id,
        notes_name: req.body.notes_name,
        notes:req.body.notes,
        tag: req.body.tag
    })
    res.json({added:"sucessfully"})
}
    catch(error){
        return res.status(400).json({ error:'network error' })
    }
})
//get notes http://localhost:7000/api/notes/update
router.put("/update/:id", fetchuser, async (req, res) => {
    try{
    const {notes_name, notes,tag}=req.body;
    const newnode={};
    if(notes_name){newnode.notes_name=notes_name}
    if(notes){newnode.notes= notes}
    if(tag){newnode.tag=tag}
    let note= await Note.findById(req.params.id);
    if(!note){
        return res.status(404).json({error:"network fail 1"})
    }
    if( note.user.toString() !==req.user.id){
        return res.status(401).json({error:"network fail 2"})
    }
    note=await Note.findByIdAndUpdate(req.params.id,{$set:newnode},{new:true})
    res.json({note});
    }
    catch(e){
        return res.status(404).json({error:"network fail 3"})
    }
   
})
//get notes http://localhost:7000/api/notes/delete
router.delete("/delete/:id", fetchuser, async (req, res) => {
    try{
    let note= await Note.findById(req.params.id);
    if(!note){
        return res.status(404).json({error:"network fail 1"})
    }
    if( note.user.toString() !==req.user.id){
        return res.status(401).json({error:"network fail 2"})
    }
    note=await Note.findByIdAndDelete(req.params.id);
    res.json({delete:"success"})
    }
    catch(e){
        return res.status(404).json({error:"network fail 3"})
    }
   
})
module.exports = router;