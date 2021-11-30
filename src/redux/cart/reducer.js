import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart:[]
    },
    reducers: { //здесь нужно напрямую менять стейт. возвращать копию не получится
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => { 
                //console.log (action.payload) 
                return game.id !== action.payload 
            })
        },
    }
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions; //экспортим экшены
export default cartSlice.reducer; //экспортим редюсер