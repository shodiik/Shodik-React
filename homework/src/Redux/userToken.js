import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: "",
}
export const userTokenSlice = createSlice({
    name: 'userToken',
    initialState,
    reducers: {
        saveToken: (state, action) => {
            state.token = action.payload
        },
    },
})

export const { saveToken } = userTokenSlice.actions
export default userTokenSlice.reducer