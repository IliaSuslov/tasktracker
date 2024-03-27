import { configureStore } from '@reduxjs/toolkit'
import { tasksTrackerSlice } from './taskSlice'

export const store = configureStore({
    reducer: {
        tasksTracker: tasksTrackerSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch