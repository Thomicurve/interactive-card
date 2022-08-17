import { configureStore } from '@reduxjs/toolkit'
import { cardDataReducer } from './reducers/cardData'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'

const makeStore = () => configureStore({ reducer: cardDataReducer, devTools: composeWithDevTools() });

export const wrapper = createWrapper(makeStore);