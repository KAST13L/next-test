"use client";
import { Posts } from "@/components/Posts/Posts";
import { useEffect, useState } from "react";
import { PostSearch } from "@/components/PostSearch/PostSearch";

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

export async function getPostsBySearch(search: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );
  return res.json();
}

/*export const metadata: Metadata = {
  title: "Blog | Next JS App",
};*/
export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData()
      .then(setPosts)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {isLoading ? <h1>Loading...</h1> : <Posts posts={posts} />}
    </>
  );
}
