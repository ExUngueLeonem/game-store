import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        currentGame: null
    },
    reducers: { //здесь нужно напрямую менять стейт. возвращать копию не получится
        setCurrentGame: (state, action) => {
            state.currentGame = action.payload;
        },
    }
});

export const { setCurrentGame } = gamesSlice.actions; //экспортим экшены
export default gamesSlice.reducer; //экспортим редюсер