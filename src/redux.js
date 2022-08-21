import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { firstName: "", lastName: "", age: 18, gender: "", probability: 0 },
    reducers: {
        addName: (state, action) => {
            const { firstName, lastName } = action.payload;
            state.firstName = firstName.toUpperCase();
            state.lastName = lastName.toUpperCase();
        },
        addAge: (state, action) => {
            state.age = action.payload;
        },
        addGender: (state, action) => {
            state.gender = action.payload;
        },
        addProbability: (state, action) => {
            state.probability = action.payload
        }
    }
});

export const { addName, addAge, addGender, addProbability } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});
