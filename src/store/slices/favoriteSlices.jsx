import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToFavorite = createAsyncThunk("addToFavorite", async (item) => {
    const token = await sessionStorage.getItem('authToken')

    const headers = await {
        headers: {
            "Content-Type": "application/json",
            "Accept": "text/plain",
            "Authorization": "Bearer " + token
        }
    }

    const response = await axios.put('https://localhost:7267/addWishlist', item, headers)
        .catch(error => {
            console.error('İstek hatası:', error);
        });
    getFavorite(item.username)
})
export const removeToFavorite = createAsyncThunk("removeToFavorite", async (item) => {
    const token = await sessionStorage.getItem('authToken')

    const headers = await {
        headers: {
            "Content-Type": "application/json",
            "Accept": "text/plain",
            "Authorization": "Bearer " + token
        }
    }


    try {
        const response = await axios.delete('https://localhost:7267/removeToWishlist', { data: item }, headers);
        return response.data;
    } catch (error) {
        console.error('İstek hatası:', error);
        throw error;
    }
})

export const getFavorite = createAsyncThunk("getFavorite", async (username) => {

    const token = await sessionStorage.getItem('authToken')

    const headers = await {
        headers: {
            "Content-Type": "application/json",
            "Accept": "text/plain",
            "Authorization": "Bearer " + token
        }
    }


    if (username != null) {
        const response = await axios.post(`https://localhost:7267/wishlist/${username}`, null, headers)
            .catch(error => {
                console.error('İstek hatası:', error);
            });
        const data = await response.data
        return data
    } else {
        return null
    }
})

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteItems: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFavorite.fulfilled, (state, action) => {
            state.favoriteItems = action.payload
        });
        builder.addCase(removeToFavorite.fulfilled, (state, action) => {
            console.log('favorilerden çıkarıldı.')
        })
    }
});


export const getfavoriteReducer = favoriteSlice.reducer;
