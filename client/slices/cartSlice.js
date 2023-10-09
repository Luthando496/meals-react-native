import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
        state.items = [...state.items, action.payload]
    },
    removeToCart: (state,action) => {
        let newBasket = [...state.items];
      let itemIndex = state.items.findIndex(item=> item.id==action.payload.id);
      if(itemIndex>=0){
        newBasket.splice(itemIndex, 1);
      }else{
        console.log("can't remove item as its not in the basket");
      }
      state.items = newBasket
    },
    clearCart: (state) => {
        state.items = []
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {addToCart,clearCart,removeToCart } = cartSlice.actions

export const cartReducer = cartSlice.reducer