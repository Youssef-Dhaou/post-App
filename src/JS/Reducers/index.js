import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import UserReducer from "./UserReducer";
export const rootReducer= combineReducers({PostReducer, UserReducer})  