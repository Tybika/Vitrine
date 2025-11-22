import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Homepage } from "~/pages/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Vitrine" },
    { name: "description", content: "Welcome to Vitrine marketplace" },
  ];
}

export default function Home() {
  return <Homepage />;
}
