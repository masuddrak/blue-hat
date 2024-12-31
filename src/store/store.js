import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slice/modalSlice";
export const store = configureStore({
  reducer: {
    productModal: modalSlice,
  },
});

// import { createStore } from "redux";
// const initialState = {
//   balace: 0,
//   loan: 0,
//   loanPurpose: "",
// };
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "account/deposite":
//       return { ...state, balace: state.balace + action.payload };
//     case "account/witdraw":
//       return { ...state, balace: state.balace - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       console.log(action);
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//       };
//     case "account/payLoan":
//       return { ...state, balanc: state.balace - state.loan };
//     default:
//       return state;
//   }
// };
// const store = createStore(reducer);
// // store.dispatch({ type: "account/deposite", payload: 500 });
// // console.log(store.getState());
// // store.dispatch({
// //   type: "account/requestLoan",
// //   payload: { amount: 10000, purpose: "Bye a car 200" },
// // });
// // console.log(store.getState());
// // store.dispatch({
// //   type: "account/payLoan",
// //   payload: { amount: 5000 },
// // });
// // console.log(store.getState());

// // untional action create
// const requestLoan = (amount) => {
//   return {
//     type: "account/deposite",
//     payload: amount,
//   };
// };
// store.dispatch(requestLoan(500));
// console.log(store.getState());
