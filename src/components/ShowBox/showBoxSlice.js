import { createSlice } from "@reduxjs/toolkit";

export const showBoxSlice = createSlice({
  name: "showBox",
  initialState: {
    flexDirection: "flex-direction-col",
  },
  reducers: {
    setFlexDirection: (state, action) => {
      state.flexDirection = "flex-direction-" + action.payload;
    },
  },
});

export const { setFlexDirection } = showBoxSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectStyle = (state) => state.showBox.flexDirection;

export default showBoxSlice.reducer;
