import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { Provider } from "react-redux";
import { store } from "./app/shared/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import 'typeface-lobster';
import 'typeface-open-sans';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App /> 
        </Provider>
    </React.StrictMode>,
  document.getElementById("root")
  );




