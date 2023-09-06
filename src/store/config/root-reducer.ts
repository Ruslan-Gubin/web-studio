'use client';
import { modalReducer, viewerReducer } from "@/entities";
import { postReducer } from "@/entities/post";
import { menuReducer } from "@/features/menu";
import { combineReducers } from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
  viewer: viewerReducer,
  post: postReducer,
  modal: modalReducer,
  menu: menuReducer,

  // [baseApi.reducerPath]: baseApi.reducer,
});
