import React from "react";

function Note(props)
{
   function handleDeleteClick(event)
   {
      props.onDelete();
   }

   return (
      <div className="note">
         <h1>{ props.title }</h1>
         <p>{ props.content }</p>
         <button onClick={handleDeleteClick}>DELETE</button>
      </div>
   );
}

export default Note;