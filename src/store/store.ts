import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/category/categorySlice";
import cartSlice from "./features/cart/cartSlice";


export default configureStore({
    reducer: {
        category: categorySlice,
        cart:cartSlice
        
    }

    
    
})