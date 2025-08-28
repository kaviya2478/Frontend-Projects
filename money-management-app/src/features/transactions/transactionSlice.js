import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {saveTransactionAPI} from "./transactionAPI";

export const saveTransaction = createAsyncThunk(
    'transactions/saveTransaction',
    async(transaction)=>{
        const response = await saveTransactionAPI(transaction);
        return response;
    }
);

const transactionSlice = createSlice({
    name: "transactions",
    initialState:{
        balance:0,
        history: [],
        status:"idle",
    },
    reducers:{
        credit: (state, action) =>{
            state.balance +=action.payload.amount;
            state.history.push({
                ...action.payload,
                type:"credit",
                date:new Date().toLocaleString(),
            });
        },
        debit: (state, action) => {
      state.balance -= action.payload.amount;
      state.history.push({
        ...action.payload,
        type: "debit",
        date: new Date().toLocaleString(),
      });
    },
    },
     extraReducers: (builder) => {
    builder
      .addCase(saveTransaction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveTransaction.fulfilled, (state, action) => {
        state.history.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(saveTransaction.rejected, (state) => {
        state.status = "failed";
      });
  },
})

export const { credit, debit} = transactionSlice.actions;
export default transactionSlice.reducer;