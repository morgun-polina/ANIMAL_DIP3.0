import { combineReducers } from "redux";
import {animalsReducer} from './animalsReducer'


export const rootReducer = combineReducers({
    animals: animalsReducer
    //редьюсер для юзера. хранпить данные для конретного юзера и ихменять их по необходимости
    // user:
})