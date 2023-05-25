import "./globals.css";
import { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Providers } from "@/redux/provider";

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
        <Providers>
          <Header />
          <div className={"content"}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
