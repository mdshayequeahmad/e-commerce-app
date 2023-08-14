import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: []
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
                item.quantity += action.payload.quantity
            } else {
                state.productData.push(action.payload);
            }
        },
    }
})

export const { addToCart } = eCommerceSlice.actions;
export default eCommerceSlice.reducer;