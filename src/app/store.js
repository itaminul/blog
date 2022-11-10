import { configureStore } from "@reduxjs/toolkit";
import siderbarReducer from '../features/sidebar/sidebarSlice'
export const store = configureStore({
    reducer: {
        sidebar: siderbarReducer
    },
})