import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk("fetchProducts", async (categoryId) => {
    const response = await axios.get(`https://localhost:7267/api/Product`)
    let data = await response.data
    if (categoryId != null) {
        data = await data.filter((item) => item.categoryId == categoryId)
        return data
    }
    return data
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export const productReducer = productSlice.reducer