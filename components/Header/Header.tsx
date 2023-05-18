import React from "react";
import Link from "next/link";
import s from "@/components/Header/Header.module.scss";
export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.linksList}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/blog"}>Blog</Link>
      </div>
    </header>
  );
};
