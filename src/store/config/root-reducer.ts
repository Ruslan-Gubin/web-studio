'use client';
import { modalReducer, viewerReducer } from "@/entities";
import { postReducer } from "@/entities/post";
import { combineReducers } from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
  viewer: viewerReducer,
  post: postReducer,
  modal: modalReducer,

  // [baseApi.reducerPath]: baseApi.reducer,
});
