import Note from "../models/note.js";
export const createNote=async(req,res)=>{
    try {
        const {title,content}=req.body;
        if(!title || !content){
            return res.status(400).json({message:"Title and content are required"});
        }
      const newNote=  new Note({title,content})
      await newNote.save();
      res.status(201).json(newNote)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getNotes=async(req,res)=>{
    try {
      const notes= await Note.find().sort({createdAt:-1})
        res.status(200).json(notes)
    } catch (error) {
         res.status(500).json({message:error.message})
    }
}

export const updateNote=async(req,res)=>{
    try {
        const {title,content}=req.body;
        const updatedNote= await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if(!updatedNote){
            return res.status(404).json({message:"Note not updated"})
        }
        res.status(200).json(updatedNote)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteNote=async(req,res)=>{
    try {
        const deletedNote= await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote){
            return res.status(404).json({message:"Note not found"})
        }
        res.status(200).json({message:"Note deleted successfully"})
    } catch (error) {
         res.status(500).json({message:error.message})
    }
}

// import Note from '../models/note.js';
// export const createNote = async(req, resp) => {
//     try {
//         const { title,content} = req.body;
//         if(!title || !content){
//             return resp.status(400).json({message:"Title or Content missing"});
//         }
//         const newNote = new Note({title,content});
//         await newNote.save();
//     } catch (error) {
//         resp.status(500).json({message:"Error creating note",error:error.message});
//     }
// };

// //get or  read(see all notes)
// export const getAllNotes = async(req, resp) => {
//     try {
// const notes = await Note.find().sort({ createdAt: -1 });
//         resp.status(200).json({notes});
//     } catch (error) {
//         resp.status(500).json({message:"Error fetching notes",error:error.message});
//     }
// }

// //update note
// export const updateNote = async(req,resp)=>{
//     try {
//         const {title,content} = req.body;
//         const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});
//         if(!updatedNote){
//             return resp.status(404).json({message:"Note not updated"});
//         }
//         resp.status(200).json(updatedNote)
//     } catch (error) {
//         resp.status(500).json({message:"Error updating note",error:error.message});
//     }
// }

// //delete note
// export const deleteNote = async(req,resp)=>{
//     try {
//         const deletedNote = await Note.findByIdAndDelete(req.params.id);
//         if(!deletedNote){
//             return resp.status(404).json({message:"Note not found"});
//         }
//         resp.status(200).json({message:"Note deleted successfully"});
//     } catch (error) {
//         resp.status(500).json({message:"Error deleting note",error:error.message});
//     }
// }