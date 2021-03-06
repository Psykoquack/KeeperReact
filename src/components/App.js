import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from 'uuid';;

function App()
{

   const [notes, setNotes] = useState([]);
   
   function handleNewNote(newNote)
   {
      console.log(newNote);
      setNotes((previous) => [...previous, {id: uuidv4(), ...newNote}]);
   }

   function handleNoteDelete(id)
   {
      setNotes((previous) => previous.filter(x => x.id !== id));
   }

  return (
     <div>
        <Header />
        <CreateArea onNewNote={ handleNewNote }/>
        {notes.map(x => <Note key={ x.id } title={ x.title } content={ x.content } onDelete={() => handleNoteDelete(x.id)}/>) }
        <Footer />
    </div>
  );
}

export default App;