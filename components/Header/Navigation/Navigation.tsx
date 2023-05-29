"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLinkType = {
  label: string;
  href: string;
};

type PropsType = {
  navLinks: NavLinkType[];
};
export const Navigation = ({ navLinks }: PropsType) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {navLinks.map((navItem) => {
        const isActive = navItem.href.slice(0, 4) === pathname.slice(0, 4);

        return (
          <Link
            style={isActive ? { color: "red" } : {}}
            key={navItem.label}
            href={navItem.href}
          >
            {navItem.label}
          </Link>
        );
      })}
    </>
  );
};
