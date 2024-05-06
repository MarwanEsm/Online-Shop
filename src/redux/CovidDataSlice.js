import { createSlice } from "@reduxjs/toolkit";


export const CovidDataSlice = createSlice({
    name: "covidData",
    initialState: {
        data: [],
        selectedCountry: null
    },
    reducers: {
        setData: (state, actions) => {
            state.data = actions.payload
        },
        setSelectedCountry: (state, actions) => {
            state.selectedCountry = actions.payload
        }
    }
})


export const { selectedCountry, setData } = CovidDataSlice.actions

export default CovidDataSlice.reducer