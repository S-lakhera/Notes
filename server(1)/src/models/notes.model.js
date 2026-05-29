import mongoose from "mongoose";

let noteSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    description: String,
}, {
    timestamps: true
})

const Notes = mongoose.model("Notes", noteSchema)

export default Notes;