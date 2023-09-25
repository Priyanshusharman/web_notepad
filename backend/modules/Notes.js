const mongoose=require("mongoose");
const { Schema } = mongoose;
const notesschema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    notes_name:{
        type:String,
        require:true
    },
    notes:{
        type:String,
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("notes",notesschema);