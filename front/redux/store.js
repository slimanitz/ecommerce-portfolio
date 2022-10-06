import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";

// initial states here
const initalState = { cart: [], user: [] };

// middleware
const middleware = [thunk];

// creating store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
