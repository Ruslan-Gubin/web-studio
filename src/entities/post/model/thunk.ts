import { createAppThunk } from '@/shared';
import { PostModel } from './types';


export const fetchAllPosts = createAppThunk('post/fetchAllPosts', async(_: void, { rejectWithValue }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    return rejectWithValue('Failed to search post')
  }
  
  return await response.json() as PostModel[];
})

export const fetchSerchPosts = createAppThunk('post/fetchSerchPosts', async(search: string, { rejectWithValue }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);

  if (!response.ok) {
    return rejectWithValue('Failed to search post')
  }
  
  return await response.json() as PostModel[];
})

