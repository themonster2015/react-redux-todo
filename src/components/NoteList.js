import { toggleNote } from "../reducers/noteReducer";
import React from "react";
const NoteList = props => {
  // const toggleImportance = id => {
  //   props.store.dispatch(toggleNote(id));
  //   console.log("toggled");
  // };
  console.log(props.store.getState());

  return (
    <ul>
      {props.store.getState().map(note => (
        <li
          key={note.id}
          onClick={() => props.store.dispatch(toggleNote(note.id))}
        >
          {note.content} <strong>{note.important ? "important" : ""}</strong>
        </li>
      ))}
    </ul>
  );
};
export default NoteList;
