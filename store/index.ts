import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] });