import { createSlice } from "@reduxjs/toolkit";

// Define the type for the state
interface PasswordState {
    showPassword: boolean;
}

// Initial state with type
const initialState: PasswordState = {
    showPassword: false,
};

const passwordSlice = createSlice({
    name: "password",
    initialState,
    reducers: {
        // Action to toggle password visibility
        togglePasswordVisibility: (state) => {
            state.showPassword = !state.showPassword;
        },
    },
});

export const { togglePasswordVisibility } = passwordSlice.actions;

export default passwordSlice.reducer;
