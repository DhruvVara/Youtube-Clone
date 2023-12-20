import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"appSlice",
    initialState:{isMenuOpen:false },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        }
    }

})

export default appSlice.reducer;
export const {toggleMenu,closeMenu} = appSlice.actions;