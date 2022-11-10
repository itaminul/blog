import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    open: true
}
export const siderbarSlice = createSlice({
    name: 'sidebarSlice',
    initialState,
    reducers: {
        handleDrawerOpen: (state) => {
            state.open = true
        },
        handleDrawerClose: (state) => {
            state.open = false
        }
    }
})

export const { handleDrawerOpen, handleDrawerClose} = siderbarSlice.actions

export default siderbarSlice.reducer;