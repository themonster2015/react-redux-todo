import { createNote } from "../reducers/noteReducer";
import React from "react";
const CreateNotecom = props => {
  const addNote = e => {
    e.preventDefault();
    const content = e.target.note.value;
    props.store.dispatch(createNote(content));
    console.log("created note");
    e.target.note.value = "";
  };
  return (
    <form onSubmit={addNote}>
      <input name="note" /> <input type="submit" value="submit" />
    </form>
  );
};
export default CreateNotecom;
