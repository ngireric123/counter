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
        }

    }
});
// destruction
// const { actions, reducer } = counterSlice;
// export const { incr, decr } = actions;
// export default reducer;

export const { incr, decr, reset } = counterSlice.actions;
export default counterSlice.reducer;