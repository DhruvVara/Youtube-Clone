import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(20,1)
            state.messages=JSON.parse(JSON.stringify([action.payload, ...state.messages]));

            // console.log(state.messages)
            
        }
    }
})

export default chatSlice.reducer;
export const {addMessage} = chatSlice.actions;