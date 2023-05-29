"use client";

import { FormEventHandler, useState } from "react";
import { getPostsBySearch } from "@/redux/services/api";

type Props = {
  onSearch: any;
};
export const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const posts = await getPostsBySearch(search);
    onSearch(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder={"search"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>search</button>
    </form>
  );
};
