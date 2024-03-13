import { configureStore } from "@reduxjs/toolkit";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { persistReducer, persistStore } from "redux-persist"; // Import persistStore and persistReducer
import { PersistGate } from 'redux-persist/integration/react';
import storage from "redux-persist/lib/storage"; // Import the storage option
import rootReducer from "../src/store/reducer/rootReducer";
import App from './App';
import './index.css';

const persistConfig = {
    key: "root",
    storage,
};

// Create the persistedReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


// Create the Redux store
const store = configureStore({
    reducer: persistedReducer, // Use the persistedReducer
});

// Create the persisted store
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </>
);
