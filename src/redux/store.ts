import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import teamsReducer from "./tems-reducer/teams-reducer";


const rootReducer = combineReducers({
   teamsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    
    
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];