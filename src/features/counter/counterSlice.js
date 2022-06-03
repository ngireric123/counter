import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //actions
        incr: (state) => {
            state.count += 1;
        },

        decr: (state) => {
            state.count -= 1;
        },

        reset: (state) => {
            state.count = 0;
        },

        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },

        decrementByAmount: (state, action) => {
            state.count -= action.payload;
        }

    }
});
// destruction
// const { actions, reducer } = counterSlice;
// export const { incr, decr } = actions;
// export default reducer;

export const { incr, decr, reset, incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;