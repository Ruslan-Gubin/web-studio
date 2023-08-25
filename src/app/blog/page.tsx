import { CONFIG_APP } from "@/shared";
import Link from "next/link";

interface IPost {
  userId: number,
    id: number,
    title: string,  
    body: string
}

export const metadata = CONFIG_APP.META_TAGS.blogPage;

async function fetchData(): Promise<IPost[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    }
  });
  return await response.json()
}

export default async function Blog ()  {
  const posts = await fetchData()

  return (
    <>
    <h1>Blog Page</h1>

    <ul>
      {posts.map(post => 
        <li key={post.id}><Link href={`/blog/${post.id}`}>{post.title}</Link></li>
        )}
    </ul>
    </>
  );
};

