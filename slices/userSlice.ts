import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../types/types"
import type {RootState} from "../store";

type State = {
    user: User
}

const initialState: State = {
    user: {uid: '', email:''},
}

export const userSlice =createSlice({
    name:"user",
    initialState,
    // 外から呼び出す関数
    reducers:{
        login: (state,action:PayloadAction<User>)=>{
            // @ts-ignore
            state.user =action.payload;
        },
        // initialStateでリセットする
        logout:(state) =>{
            state.user =initialState.user
        }
    }
})


export const {login,logout} =userSlice.actions

// 現在のUserのstateを返してくれる関数
export const selectUser =(state:RootState) =>state.user.user

export default userSlice.reducer

