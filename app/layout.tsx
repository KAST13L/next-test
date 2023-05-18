import "./globals.css";
import { Metadata } from "next";
import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Home | Next JS App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"container"}>
        <Header />
        <div className={"content"}>{children}</div>
      </body>
    </html>
  );
}
