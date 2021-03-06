import React, { useState } from "react";

function CreateArea(props)
{
   const [note, setNote] = useState({ title: "", content: "" });

   function handleNoteChange(event)
   {
      const { value, name } = event.target;
      setNote((previous) =>
      {
         let newNote =
         {
            ...previous,
            [name]: value
         };

         return newNote;
      });
   }

   function handleAddClick(event)
   {
      event.preventDefault();
      props.onNewNote(note);
      setNote({ title: "", content: "" });
   }

   return (
      <div>
         <form>
            <input onChange={ handleNoteChange } value={ note.title } name="title" placeholder="Title" />
            <textarea onChange={ handleNoteChange } value={ note.content } name="content" placeholder="Take a note..." rows="3" />
            <button onClick={handleAddClick}>Add</button>
         </form>
      </div>
   );
}

export default CreateArea;