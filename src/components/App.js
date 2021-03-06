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

   function handleNoteDelete(key)
   {
      setNotes((previous) => previous.filter(x => x.id !== key));
   }

  return (
     <div>
        <Header />
        <CreateArea onNewNote={ handleNewNote }/>
        {notes.map(x => <Note key={ x.id } title={ x.title } content={ x.content } onDelete={handleNoteDelete}/>) }
        <Footer />
    </div>
  );
}

export default App;