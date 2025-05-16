import { configureStore } from '@reduxjs/toolkit'
// ...
import Categories from './categories/categoriesSlice'
import Products from './products/productsSlice'

const store = configureStore({
  reducer: {
    Categories,
    Products
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;