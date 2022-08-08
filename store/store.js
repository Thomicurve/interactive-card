import { configureStore } from '@reduxjs/toolkit'
import { cardDataReducer } from './reducers/cardData'

export default configureStore({
  reducer: cardDataReducer,
})