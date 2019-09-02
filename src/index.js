import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./styles.css";

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return [...state, action.data];
    case "TOGGLE_IMPORTANCE":
      const id = action.data.id;
      const noteToChange = state.find(note => note.id === id);
      console.log(noteToChange);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      };
      return state.map(note => (note.id === id ? changedNote : note));
    default:
      return state;
  }
};

const store = createStore(noteReducer);

store.dispatch({
  type: "NEW_NOTE",
  data: {
    content: "the app state is in redux store",
    important: true,
    id: 1
  }
});

store.dispatch({
  type: "NEW_NOTE",
  data: {
    content: "state changes are made with actions",
    important: false,
    id: 2
  }
});
const handleChange = e => {};

const addNote = e => {
  e.preventDefault();
  const content = e.target.note.value;
  store.dispatch({
    type: "NEW_NOTE",
    data: {
      content: content,
      important: false,
      id: Math.random(100)
    }
  });
  e.target.note.value = "";
};
const toggleImportance = id => {
  store.dispatch({
    type: "TOGGLE_IMPORTANCE",
    data: {
      id
    }
  });
};
const App = () => {
  return (
    <div>
      <form onSubmit={addNote}>
        {" "}
        <input name="note" /> <input type="submit" value="submit" />
      </form>
      <ul>
        {store.getState().map(note => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

renderApp();
store.subscribe(renderApp);
