import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  }
}

interface IPost {
  userId: number,
    id: number,
    title: string,  
    body: string
}

async function fetchData(id: string): Promise<IPost> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    }
  });

  if (!response.ok) throw new Error(`Failed to fetch post ${id}`)

  return await response.json()
}


export async function generateMetadata( {params: { id }}: Props ): Promise<Metadata> {
  const post = await fetchData(id)
  return {
    title: id,
  }
}

export default async function Post({params: { id }}: Props) {
  const post = await fetchData(id)
return (
  <>
  <h1>Post{id}</h1>
  <p>{post.body}</p>
  </>
)
}