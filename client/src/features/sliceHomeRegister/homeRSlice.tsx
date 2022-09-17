import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* export const getExercises = createAsyncThunk("homeRegister/getExercises", async (thunkAPI) => {
    try {
        return await axios.get("http://localhost:3001/exercises")
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
}
    
) */

/* interface exercises {
        _id: string
        name: string
        difficulty: string
        muscles: string
        genre: string
        video: string
}

interface Reducer {
    exercises: Array<exercises> | null
    status: string
}

const initialState: Reducer = {
    exercises: null,
    status: ""
}

const homeRSlice = createSlice({
    name: "homeRegister",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getExercises.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getExercises.fulfilled, (state, {payload}) => {
                console.log(payload)
                state.status = "success"
            })
    }
})


export default homeRSlice.reducer */