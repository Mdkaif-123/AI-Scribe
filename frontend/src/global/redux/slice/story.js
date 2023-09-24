/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import toast from 'react-hot-toast';

// Global Function
import createServerRequest from '../../module/CreateServerRequest';




export const generateStory = createAsyncThunk('generateStory', async (promptData) => {
    const response = await createServerRequest("POST", `/story/generate`, promptData)
    console.log(response);
    return response
})


export const getDashboardData = createAsyncThunk('getDashboardData', async () => {
    const response = await createServerRequest("GET", "/story/top-voted-stories")
    console.log(response);
    return response
})


export const updateStory = createAsyncThunk('updateStory', async (updatedStory) => {
    const response = await createServerRequest("PUT", `/story/update/${updatedStory._id}`, updatedStory)
    console.log(response);
    return response
})


export const deleteStory = createAsyncThunk('deleteStory', async (id) => {
    console.log(id);
    const response = await createServerRequest("DELETE", `/story/delete/${id}`)
    console.log(response);
    return response
})

export const saveStory = createAsyncThunk('saveStory', async (data) => {
    console.log(data);
    const response = await createServerRequest("POST", `/story/save`, data)
    console.log(response)
    return response
})

export const login = createAsyncThunk("login", async (credentials) => {
    const response = await createServerRequest("POST", "/user/login", credentials)
    console.log(response);
    return response
})

export const signUp = createAsyncThunk("signUp", async (credentials) => {
    console.log("Inside the sign up");
    console.log(credentials);
    const response = await createServerRequest("POST", "/user/signup", credentials)
    console.log(response.status);
    return response
})

const option = {
    style: {
        background: localStorage.getItem("aiScribeTheme") === "dark" ? "#333" : "#fff",
        color: localStorage.getItem("aiScribeTheme") === "dark" ? "#fff" : "#333",
    }
}

const story = createSlice({
    name: "story",
    initialState: {
        topVotedStories: null,
        userGeneratedStories: null,
        generatedStory: null,
        prompt: null,
        isLoggedIn: false,
        token: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {

        builder.addCase(getDashboardData.fulfilled, (state, action) => {
            console.log("action payload:", action.payload)
            state.isLoading = false
            if (action.payload.topVotedStories) state.topVotedStories = action.payload.topVotedStories
            if (action.payload.userGeneratedStories) state.userGeneratedStories = action.payload.userGeneratedStories
        }),

            builder.addCase(getDashboardData.pending, (state, action) => {
                state.isLoading = true
            }),

            builder.addCase(getDashboardData.rejected, (state, action) => {
                state.isLoading = false
                //toast.error(action.payload.message, option)
            }),

            // Update Story 

            builder.addCase(updateStory.fulfilled, (state, action) => {
                state.isLoading = false
                toast.success("Story Updated", option)
                console.log("in update action payload:", action.payload.story)
                state.topVotedStories = state.topVotedStories.map((story) => {
                    if (action.payload.story._id === story._id) {
                        return action.payload.story
                    }
                    return story
                })
                state.userGeneratedStories = state.userGeneratedStories.map((story) => {
                    if (action.payload.story._id === story._id) {
                        return action.payload.story
                    }
                    return story
                })
            }),

            builder.addCase(updateStory.pending, (state, action) => {
                state.isLoading = true
            }),

            builder.addCase(updateStory.rejected, (state, action) => {
                state.isLoading = false
                //toast.error(action.payload.message, option)
            }),

            // Delete Story

            builder.addCase(deleteStory.fulfilled, (state, action) => {
                state.isLoading = false
                console.log("In delete action payload:", action.payload.story)

                toast.success("Story Deleted Successfully", option)
                state.topVotedStories = state.topVotedStories.filter((story) => story._id !== action.payload.story._id)
                state.userGeneratedStories = state.userGeneratedStories.filter((story) => story._id !== action.payload.story._id)
            }),

            builder.addCase(deleteStory.pending, (state, action) => {
                state.isLoading = true
            }),

            builder.addCase(deleteStory.rejected, (state, action) => {
                state.isLoading = false
                //toast.error(action.payload.message, option)
            }),

            // Generate Story

            builder.addCase(generateStory.fulfilled, (state, action) => {
                state.isLoading = false
                console.log("In generation action payload:", action)
                toast.success("Story generated successfully", option)
                const response = {
                    title: action.payload.title,
                    story: action.payload.story
                }
                state.generatedStory = response
                state.prompt = action.meta.arg
            }),

            builder.addCase(generateStory.pending, (state, action) => {
                state.isLoading = true
            }),

            builder.addCase(generateStory.rejected, (state, action) => {
                state.isLoading = false
                //toast.error(action.payload.message, option)
            }),

            //Save Story

            builder.addCase(saveStory.fulfilled, (state, action) => {
                state.isLoading = false
                toast.success("Story saved")
                console.log("In saving action payload:", action.payload)
                state.userGeneratedStories = [...state.userGeneratedStories, action.payload.story]
                if (action.payload.story.rating > 2) state.topVotedStories = [...state.topVotedStories, action.payload.story]
            }),

            builder.addCase(saveStory.pending, (state, action) => {
                state.isLoading = true
            }),

            builder.addCase(saveStory.rejected, (state, action) => {
                state.isLoading = false
                //toast.error(action.payload.message, option)
            }),


            // ================================= Auth builder ====================================

            // Login 

            builder.addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                console.log("Inside the login action", action.payload);
                if (action.payload.success === false) {
                    toast.error(action.payload.message, option)
                    state.isError = true
                    return
                }
                state.token = action.payload.token
                toast.success("Login Successful", option)
                state.isLoggedIn = true
                localStorage.setItem("aiScribeAuthToken", action.payload.token)
                localStorage.setItem("aiScribeUserName", action.payload.user.userName)
            })

        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true
        }),

            builder.addCase(login.rejected, (state, action) => {
                state.isLoading = false
                //toast.error(action.payload.message, option)
            }),

            //Sign Up

            builder.addCase(signUp.fulfilled, (state, action) => {
                state.isLoading = false
                console.log("Inside the signup action", action.payload);
                if (action.payload.success === false) {
                    toast.error(action.payload.message, option)
                    state.isError = true
                    return
                }
                state.token = action.payload.token
                state.isLoggedIn = true
                toast.success("Account Created", option)
                localStorage.setItem("aiScribeAuthToken", action.payload.token)
                localStorage.setItem("aiScribeUserName", action.payload.user.userName)
            })

        builder.addCase(signUp.pending, (state, action) => {
            state.isLoading = true
        }),

            builder.addCase(signUp.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                console.log(action);
                console.log("In error of signUp", action.payload);
                toast.error(action.payload, option)
            })
    }
})

export default story.reducer;