
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserDataType {
    user: {
        email: string,
        password: string,
        age: string
    }
}

const initialState: IUserDataType = {
    user: {
        email: "",
        password: "",
        age: ""
    }
}

export const UserSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload

        },
        unRegisterUser: (state, action: PayloadAction<any>) => {
            console.log(action.payload)
        }

    }
})

export const { registerUser, unRegisterUser } = UserSlice.actions


export default UserSlice.reducer