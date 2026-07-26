import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "@/shared/api/http";

interface State {
    avatar?: any,
    name?: string,
    comment: string
  }

const initialState = {
    feedbacks: []
}

export const getFeedback = createAsyncThunk("user/feedback", async (_, thunkApi) =>  {
    try {
        const {data} = await http.get<Array<string>>("/feedbackUser")
        return data
    } catch (error: any) {
        thunkApi.rejectWithValue(error.message)
}})


const homeVisitor = createSlice({
    name: "visitor",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getFeedback.fulfilled, (state, action: PayloadAction<any>) => {
                state.feedbacks = action.payload
            })
    },
})

export default homeVisitor.reducer