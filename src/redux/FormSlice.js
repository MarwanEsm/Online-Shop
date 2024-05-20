import { createSlice } from "@reduxjs/toolkit";

export const FormSlice = createSlice({
    name: "form",
    initialState: {
        form: "",
        isRegistered: false,
        registrationDetails: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        }
    },
    reducers: {
        setForm: (state, action) => {
            state.form = action.payload;
        },
        setRegistrationDetails: (state, action) => {
            state.registrationDetails = action.payload
        },
        setIsRegistered: (state, action) => {
            state.isRegistered = action.payload
        }
    }
});

export const { setIsRegistered, setForm, setRegistrationDetails } = FormSlice.actions;
export default FormSlice.reducer;
