import React from "react";
import CreateNotecom from "./CreateNotecom";
import NoteList from "./NoteList";
const App = props => {
  return (
    <div>
      <CreateNotecom store={props.store} />
      <NoteList store={props.store} />
    </div>
  );
};
export default App;
