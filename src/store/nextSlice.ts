/* This code snippet is a TypeScript file that defines a Redux slice using the `@reduxjs/toolkit`
library. Here's a breakdown of what the code is doing: */
import { createSlice } from "@reduxjs/toolkit";
import { StoreProduct } from "@/type.d";
import { access, stat } from "fs";
import { act } from "react";


interface Nextstate{
    productData : StoreProduct[];
    favoriteData: StoreProduct[];
    allProducts: StoreProduct[];
    userInfo: null | string;

}
// Correcting the variable name to 'initialState'
const initialState:Nextstate = {
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
           const  exsitingProduct = state.productData.find(
            (item:StoreProduct)=>item.id===action.payload.id
           )
           if(exsitingProduct){
            exsitingProduct.quantity += action.payload.quantity
           }
           else{
            state.productData.push(action.payload)
           }
        },
        addToFavorite: (state, action) => {
           const  exsitingProduct = state.productData.find(
            (item:StoreProduct)=>item.id===action.payload.id
           )
           if(exsitingProduct){
            exsitingProduct.quantity += action.payload.quantity
           }
           else{
            state.favoriteData.push(action.payload)
           }
        },
        increaseQuantity:(state,action)=>{
            const exsitingProduct=state.productData.find(
                (item:StoreProduct)=>item.id===action.payload.id
            )
            exsitingProduct && exsitingProduct.quantity++;
        },
        decreaseQuantity:(state,action)=>{
            const exsitingProduct=state.productData.find(
                (item:StoreProduct)=>item.id===action.payload.id
            )
            if( exsitingProduct?.quantity==1){
                exsitingProduct.quantity==1;
            }
            else{
                exsitingProduct!.quantity--;
            }
        },
        deleteProduct:(state,action)=>{
            state.productData = state.productData.filter(
                (item)=>item.id !== action.payload
            );
        },
        resetCart:(state)=>{
            state.productData=[]
        },
        addUser:(state,action)=>{
            state.userInfo = action.payload
        },
        removeUser:(state)=>{
            state.userInfo = null
        },
        setAllProducts:(state,action)=>{
            state.allProducts=action.payload
        }
    },
});

// Export actions
export const { addToCart,addToFavorite,increaseQuantity,decreaseQuantity,deleteProduct,removeUser,resetCart,addUser,setAllProducts } = nextSlice.actions;

// Export the reducer
export default nextSlice.reducer;
