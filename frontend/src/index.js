import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import rootReducer from './Data/Reducers/index';
import { PersistGate } from "redux-persist/integration/react" ;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
const reduxStore = createStore(persistedReducer);
const persistor = persistStore(reduxStore);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
