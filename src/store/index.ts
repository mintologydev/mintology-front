/** @format */

// import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {configureStore} from '@reduxjs/toolkit'
import activitySlice from './activity/slice'

// const rootReducer = combineReducers({
//   activity: activityListSlice.reducer,
// })

const store = configureStore({
  reducer: {
    activity: activitySlice,
  }
  // reducer: rootReducer,
  // 可以添加自己的中间件,比如打印日志的
  // middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
  // devTools: true,
})

// 获取全部store数据类型
export type RootState = ReturnType<typeof store.getState>

export default store
