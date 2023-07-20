import { createSlice } from "@reduxjs/toolkit";

export const TableSlice = createSlice({
    name: 'table',
    initialState:{
        table:[]
    },
    reducers:{
        addData:(state,action)=>{
            state.table=action.payload
        },
        cleanData: state=>{
            state.table=[]
        }
    }
})

export const {addData,cleanData}=TableSlice.actions