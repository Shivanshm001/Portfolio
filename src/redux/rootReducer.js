import { combineReducers } from "redux";
import { homeReducer } from './home/homeReducer'
import { topbarReducer } from './topbar/topbarReducer';
import { contactReducer } from "./contact/contactReducer";


export const rootReducer = combineReducers({
   topbar: topbarReducer,
   home: homeReducer,
   contact: contactReducer,
})