/** @format */

import {createSlice} from '@reduxjs/toolkit'

// export interface ActivityState {
//   data: any
//   text: string
// }

// const initialState: ActivityState = {
//   data: [],
//   text: 'test text',
// }

export const activityListSlice = createSlice({
  name: 'activity',
  initialState: {
    data: [],
    text: 'test text',
  },
  reducers: {
    fetchSuccess: (state, action) => {
      state.data = action.payload.data
    },
    setText: (state, {payload}) => {
      state.text = payload.text
    },
  },
})

// 导出actions
export const {fetchSuccess, setText} = activityListSlice.actions

export default activityListSlice.reducer // 导出reducer，在创建store时使用到
