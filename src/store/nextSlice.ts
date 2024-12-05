import { createSlice } from "@reduxjs/toolkit";
import { StoreProduct } from "@/type.d";


interface Nextstate{
    productData : StoreProduct[];
    favoriteData: StoreProduct[];
    allProducts: StoreProduct[];
    userInfo: null | string;

}
// Correcting the variable name to 'initialState'
const initialState = {
    productData: [],
    favoriteData: [],
    allProducts: [],
    userInfo: null,
};

// Creating the slice
export const nextSlice = createSlice({
    name: 'next',
    initialState, // Referencing the correct 'initialState'
    reducers: {
        // Add to cart functionality
        addToCart: (state, action) => {
            state.productData === action.payload.id; // Add the product to the cart
        },
    },
});

// Export actions
export const { addToCart } = nextSlice.actions;

// Export the reducer
export default nextSlice.reducer;
