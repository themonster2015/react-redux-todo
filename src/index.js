import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./styles.css";
import noteReducer from "./reducers/noteReducer";
import App from "./components/App";
const store = createStore(noteReducer);

store.dispatch({
  type: "NEW_NOTE",
  data: {
    content: "state changes are made with actions",
    important: false,
    id: 2
  }
});
store.dispatch({
  type: "NEW_NOTE",
  data: {
    content: "my note",
    important: false,
    id: 3
  }
});

const renderApp = () => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

renderApp();
store.subscribe(renderApp);
