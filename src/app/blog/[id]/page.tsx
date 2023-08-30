import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  }
}

export async function generateMetadata( {params: { id }}: Props ): Promise<Metadata> {

  return {
    title: id,
  }
}

export default async function Post({params: { id }}: Props) {

  return (
    <>
  <h1>Post{id}</h1>
  </>
)
}
