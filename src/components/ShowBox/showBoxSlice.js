import { createSlice } from "@reduxjs/toolkit";

export const showBoxSlice = createSlice({
  name: "showBox",
  initialState: {
    parentStyle: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      alignContent: "flex-start",
    },
  },
  reducers: {
    setFlexDirection: (state, action) => {
      state.parentStyle.flexDirection = action.payload;
    },
    setFlexWrap: (state, action) => {
      state.parentStyle.flexWrap = action.payload;
    },
    setJustifyContent: (state, action) => {
      state.parentStyle.justifyContent = action.payload;
    },
    setAlignItems: (state, action) => {
      state.parentStyle.alignItems = action.payload;
    },
    setAlignContent: (state, action) => {
      state.parentStyle.alignContent = action.payload;
    },
  },
});

export const {
  setFlexDirection,
  setFlexWrap,
  setJustifyContent,
  setAlignItems,
  setAlignContent,
} = showBoxSlice.actions;

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
export const selectParentStyle = (state) => state.showBox.parentStyle;

export default showBoxSlice.reducer;
