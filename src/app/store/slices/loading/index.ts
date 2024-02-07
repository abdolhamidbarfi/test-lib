import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ILoadingSliceType {
    loading: boolean
}

const initialState : ILoadingSliceType = {
    loading : false
}

export const LoadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: ((state , action : PayloadAction<boolean>) => {
            state.loading = action.payload
        })
    }
})

export const {setLoading} = LoadingSlice.actions

export default LoadingSlice.reducer