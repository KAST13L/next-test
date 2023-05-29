import { Metadata } from "next";
import { Posts } from "@/components/Posts/Posts";

export type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
}

export const metadata: Metadata = {
  title: "Blog | Next JS App",
};
export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1>Blog page</h1>
      <Posts posts={posts} />
    </>
  );
}
