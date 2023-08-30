export interface PostModel {
  userId: number,
  id: number,
  title: string,  
  body: string
}

export interface PostInitState {
  posts: PostModel[];
  loading: boolean;
  error: string | null;
}
