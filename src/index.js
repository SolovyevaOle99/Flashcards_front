import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContexProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
  
  root.render(
    <React.StrictMode>
      <AuthContexProvider>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </AuthContexProvider>
    </React.StrictMode>
  );
};


rerenderEntireTree(store.getState());

store.updateText(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
