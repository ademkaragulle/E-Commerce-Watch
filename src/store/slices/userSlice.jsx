import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("login", async (user) => {
    try {
        const response = await fetch('https://localhost:7267/LoginUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.error('Login failed');
        }
    } catch (error) {
        throw error;
    }
});

export const signUp = createAsyncThunk("signUp", async (newUser) => {
    try {
        const response = await axios.post('https://localhost:7267/registerUser', newUser);
        return response.data
    } catch (error) {
        throw error;
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        currentUser: null,
        token: null,
    },
    reducers: {
        Logout: (state, action) => {
            sessionStorage.removeItem('authToken')
            sessionStorage.removeItem('user')
            state.currentUser = null
            state.token = null
        },
        IsExistToken: (state, action) => {
            state.currentUser = JSON.parse(action.payload.user)
            state.token = action.payload.token
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.username) {
                const newUser = {
                    username: action.payload.username,
                    email: action.payload.email,
                    password: action.payload.password,
                }
                state.token = action.payload.authToken;
                state.currentUser = newUser;
                sessionStorage.setItem('authToken', action.payload.authToken);
                sessionStorage.setItem('user', JSON.stringify(newUser));
            }
        });
        builder.addCase(signUp.fulfilled, (state, action) => {
            if (action.payload) {
                alert("Kayıt İşlemi Başarılı")
            }
            else {
                alert("kayıt işlemi başarısız. başka bir username ile tekrar deneyiniz.")
            }
        });

        builder.addCase(signUp.rejected, (state, action) => {
            console.error('Kullanıcı kaydı başarısız:', action.error.message);
        });
    },
});

export const {
    IsExistToken,
    Logout
} = userSlice.actions;

export const getUserReducer = userSlice.reducer;
