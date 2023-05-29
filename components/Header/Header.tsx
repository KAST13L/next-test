import React from "react";
import s from "@/components/Header/Header.module.scss";
import { Navigation } from "@/components/Header/Navigation/Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "todos", href: "/todos" },
];
export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.linksList}>
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
};
