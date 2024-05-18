import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import CovidDataSlice from "./CovidDataSlice"
import FormSlice from "./FormSlice"

const rootReducer = combineReducers({
    covid: CovidDataSlice,
    form: FormSlice
})

export const store = configureStore({
    reducer: rootReducer
})

