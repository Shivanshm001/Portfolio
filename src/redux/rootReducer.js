import { combineReducers } from "redux";
import {homeReducer} from './home/homeReducer'
import {topbarReducer} from './topbar/topbarReducer';

export const rootReducer = combineReducers({
   home: homeReducer,
   topbar: topbarReducer
})