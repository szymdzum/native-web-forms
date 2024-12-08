import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Centered } from "@components/Layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Native Form Test" },
    { name: "test", content: "hello!" },
  ];
}

export default function Home() {
  return (
    <Centered>
      <Link to="/login">Login</Link>
    </Centered>
  );
}
