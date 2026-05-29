import Notes from "../models/notes.model.js"

export let noteCreationService = async({ title, description }) => {
    try {
        if(!title){
            throw new Error("Title is required.")
        }
        if(!description){
            throw new Error("Description is required.")
        }

        if(title.length<3){
            throw new Error("Title must have at least 4 characters")
        }
        if(description.length<10){
            throw new Error("Title must have at least 10 characters")
        }

        const newNote = await Notes.create({
            title,description
        })

        return newNote
    } catch (err) {
        console.log(err);
        throw new Error(err.message)
    }
}
