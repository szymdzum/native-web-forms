import type { Route } from "./+types/home";
import { Link } from "react-router";
import CenteredLayout from "~/components/CenteredLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Native Form Test" },
    { name: "test", content: "hello!" },
  ];
}

export default function Home() {
  return (
    <CenteredLayout>
      <Link to="/login">Login</Link>
    </CenteredLayout>
  );
}
