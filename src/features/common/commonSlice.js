import { createSlice} from '@reduxjs/toolkit'

const key = 'common';

const initialState = {
    username: 'admin',
    fullName: 'Ivan Kameniev',
}



const commonSlice = createSlice({
    name: `${key}`,
    initialState,
    reducers: {
        updateUser(state, action) {
            const { username, fullName } = action.payload
            state.username = username
            state.fullName = fullName
        }
    }
})

export const { updateUser } = commonSlice.actions

export default commonSlice.reducer

export const getByProperty = (state, property) =>
    state[key][property]

export const getAllProps = (state) =>
    state[key]
