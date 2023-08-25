'use client';
import { viewerReducer } from "@/entities";
import { combineReducers } from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
  viewer: viewerReducer,


  // [baseApi.reducerPath]: baseApi.reducer,
});
