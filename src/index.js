import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./redux/store/Store";
import { Provider } from "react-redux";
import { fetchUsers } from "./redux/feature/users/usersSlice";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />}/>
      </Routes>
    </Router>
  </Provider>
);
