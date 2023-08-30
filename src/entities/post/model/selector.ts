import { useAppDispatch, useAppSelector } from "@/shared";
import { postSlice } from "./slice";
import {
fetchAllPosts, fetchSerchPosts
} from "./thunk";


const postSelect = (state: RootState) => state.post;
const postAction = postSlice.actions;
export const postReducer = postSlice.reducer;

export const usePostSelect = () => {
  return useAppSelector(postSelect);
};

export const usePostAction = () => {
  const dispatch = useAppDispatch();

  return {
    fetchSerchPosts: (search: string) => dispatch(fetchSerchPosts(search)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
  };
};

