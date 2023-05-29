"use client";
import { Posts } from "@/components/Posts/Posts";
import { useEffect, useState } from "react";
import { PostSearch } from "@/components/PostSearch/PostSearch";
import { getData } from "@/redux/services/api";

export type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

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
