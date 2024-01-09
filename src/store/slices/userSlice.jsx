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
            sessionStorage.setItem('authToken', data.authToken)
            return data.authToken
        } else {
            console.error('Login failed');
        }
    } catch (error) {
        throw error;
    }
});


export const getUserInformation = createAsyncThunk("getUserInformation", async () => {
    let data;
    const storedDataString = sessionStorage.getItem("authToken");
    if (storedDataString) {
        try {
            const response = await fetch(
                "https://localhost:7267/api/Auth/LoginUser",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "text/plain",
                        Authorization: `Bearer ${storedDataString}`,
                    },
                }
            )
            data = await response.json()
            if (!response.ok) {
                throw new Error("API isteği başarısız");
            }

        } catch (error) {
            console.error("Hata:", error.message);
        }
    }
    return data
});



const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        currentUser: null,
        token: null
    },
    reducers: {
        SignUp: async (state, action) => {
            const users = await axios.get("http://localhost:3000/users")
            const newUser = action.payload;
            const existingUser = users.data.find(item => item.userName === newUser.userName);
            if (!existingUser) {
                axios.post('http://localhost:3000/users', newUser)
                    .then(response => {
                        console.log('POST response: Başarılı');
                    })
                    .catch(error => {
                        console.error('POST error:', error);
                    });
            } else {
                alert("This user name is used")
            }
        },
        Logout: (state, action) => {
            sessionStorage.removeItem('authToken')
            state.currentUser = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload;
        });
        builder.addCase(getUserInformation.fulfilled, (state, action) => {
            console.log(action.payload)
            state.currentUser = action.payload.username;
        });
    },
});

export const {
    SignUp,
    Logout
} = userSlice.actions;

export const getUserReducer = userSlice.reducer;
