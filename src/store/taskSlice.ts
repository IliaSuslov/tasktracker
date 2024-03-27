import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TasksTrackerState } from '../interfaces'

const initialState: TasksTrackerState = {
    tasks: [
        { id: 1, title: 'create a task', status: 'planned' },
        { id: 2, title: 'make an app', status: 'in progress' },
        { id: 3, title: 'complete an app', status: 'done' },
        { id: 4, title: 'create a task1111', status: 'planned' },
        { id: 5, title: 'make an app1111', status: 'in progress' },
        { id: 6, title: 'complete an app1111', status: 'done' },
    ]
}

export const tasksTrackerSlice = createSlice({
    name: 'tasksTracker',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            state.tasks.push({ id: state.tasks.length + 1, ...payload })
            console.log(state.tasks)
            // return state.tasks
        },
    },
})

export const { addTask } = tasksTrackerSlice.actions

export default tasksTrackerSlice.reducer