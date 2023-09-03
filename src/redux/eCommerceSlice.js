import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    token: "",
}

export const eCommerceSlice = createSlice({
    name: "ecommerce",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );

            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },
        deleteItem: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        login: (state, action) => {
            state.token = action.payload;

        },
        logout: (state) => {
            state.token = "";
        },
    }
})

export const { addToCart, deleteItem, login, logout } = eCommerceSlice.actions;
export default eCommerceSlice.reducer;



