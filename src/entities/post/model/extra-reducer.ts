import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchAllPosts, fetchSerchPosts } from "./thunk";
import { PostInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<PostInitState>
) => {
  builder
    .addCase(fetchAllPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchAllPosts.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload;
      }
    })
    .addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.posts = action.payload;
    });

  builder
    .addCase(fetchSerchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchSerchPosts.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload;
      }
    })
    .addCase(fetchSerchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.posts = action.payload;
    });
};
