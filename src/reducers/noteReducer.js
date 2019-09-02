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

const createNote = content => {
  return {
    type: "NEW_NOTE",
    date: {
      content: content,
      id: Number((Math.random() * 1000000).toFixed(0)),
      completed: false
    }
  };
};

const toggleNote = id => {
  return {
    type: "TOGGLE_IMPORTANCE",
    data: {
      id: id
    }
  };
};
export { createNote, toggleNote };
export default noteReducer;
