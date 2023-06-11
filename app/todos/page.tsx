import { Metadata } from "next";
import Todos from "@/components/todos/Todos";

export const metadata: Metadata = {
  title: "Todos | Next JS App",
};

export default function TodosPage() {
  return (
    <>
      <Todos />
    </>
  );
}
