import { PostType } from "@/app/blog/page";
import Link from "next/link";

export const Posts = ({ posts }: any) => {
  return (
    <ul style={{ textAlign: "start" }}>
      {posts.map((p: PostType) => (
        <li key={p.id}>
          <Link href={`/blog/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
};
