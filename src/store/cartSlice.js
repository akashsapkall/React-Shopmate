import { createSlice } from "@reduxjs/toolkit";

function saveToLocal(cartList){
    localStorage.setItem("cartList",JSON.stringify(cartList));
}
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartList:JSON.parse(localStorage.getItem("cartList")) || [],
    },
    reducers:{
        add(state,action){
            state.cartList.push(action.payload);
            saveToLocal(state.cartList);
        },
        remove(state,action){
            state.cartList=state.cartList.filter((p)=>p.id!==action.payload.id);
            saveToLocal(state.cartList);
        }
    }
});

export const { add, remove } =cartSlice.actions;
export default cartSlice.reducer;