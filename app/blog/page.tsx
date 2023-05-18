import { Metadata } from "next";
import Link from "next/link";

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
      <ul style={{ textAlign: "start" }}>
        {posts.map((p: any) => (
          <li key={p.id}>
            <Link href={`/blog/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
