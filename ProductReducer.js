import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: [],
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProduct: (state, action) => {
            state.product.push({ ...action.payload })
        },
        incrementQty: (state, action) => {
            const itemPresent = state.product.find((item) => item.id === action.payload.id)
            itemPresent.quantity++;
        },
        decrementQty: (state, action) => {
            const itemPresent = state.product.find((item) => item.id === action.payload.id)
            if (itemPresent.quantity == 1) {
                itemPresent.quantity = 0;
                const removeItem = state.product.filter((item) => item.id !== action.payload.id);
                state.product = removeItem;
            } else {
                itemPresent.quantity--;
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { getProduct, incrementQty, decrementQty } = ProductSlice.actions

export default ProductSlice.reducer