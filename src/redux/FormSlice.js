import { createSlice } from "@reduxjs/toolkit";

export const FormSlice = createSlice({
    name: "form",
    initialState: {
        form: "",
        registrationDetails: {
            first_name: "",
            last_name: "",
            password: "",
        }
    },
    reducers: {
        setForm: (state, action) => {
            state.form = action.payload;
        },
        setRegistrationDetails: (state, action) => {
            state.registrationDetails = action.payload
        }
    }
});

export const { setForm, setRegistrationDetails } = FormSlice.actions;
export default FormSlice.reducer;
