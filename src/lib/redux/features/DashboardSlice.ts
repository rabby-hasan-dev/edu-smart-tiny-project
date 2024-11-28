
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state type
interface DashboardState {
    isSidebarOpen: boolean;
    isCollapsed: boolean;
}


// Initial state
const initialState: DashboardState = {
    isSidebarOpen: false,
    isCollapsed: false,
};




const dashboardSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        toggleCollapse: (state) => {
            state.isCollapsed = !state.isCollapsed;
        },
        closeSidebar: (state) => {
            state.isSidebarOpen = false;
        },
    },
});



export const { toggleSidebar, toggleCollapse, closeSidebar } = dashboardSlice.actions;
export default dashboardSlice.reducer;
