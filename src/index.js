import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./store";
import './index.css';
import App from './App';
import App2 from './App2';
import Profile from './Profile';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <>
        <App />
        <App2 />
      </> */}
      <Profile />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
