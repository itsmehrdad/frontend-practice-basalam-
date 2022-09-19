import {combineReducers} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import dataReducer from "./dataReducer/dataReducer";

const combinedReducers = combineReducers({
    data : dataReducer
})

const persistConfig = {
    key : 'root',
    storage
}

const persistedReducers = persistReducer(persistConfig ,whiteList['data'], combinedReducers)
export default persistedReducers