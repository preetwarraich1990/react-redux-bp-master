import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { authReducer } from './rootReducer'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    authReducer,
    toastr: toastrReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
