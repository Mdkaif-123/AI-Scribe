import { configureStore } from '@reduxjs/toolkit'
import story from './slice/story'

const store = configureStore({
    reducer: {
        story
    }
})

export default store

