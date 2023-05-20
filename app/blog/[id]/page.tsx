import { Metadata } from "next";

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

type Props = {
  params: {
    id: string;

  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPost(id);
  return {
    title: `${post.title} | Next JS App`,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPost(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
