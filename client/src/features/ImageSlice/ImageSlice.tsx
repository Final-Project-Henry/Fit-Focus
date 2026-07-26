import { createSlice } from '@reduxjs/toolkit';
import monkey from '@/assets/legacy/icons/monkey.jpg'

export interface Image {
    image: string
}

export const initialState: Image =  {
    image: monkey
}

export const ImageSlice = createSlice ({
    name: "image",
    initialState,
    reducers: {}
})

export default ImageSlice.reducer