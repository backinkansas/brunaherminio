import type { MetaFunction } from "@vercel/remix";
import {
  Logo,
  linksLogo,
} from "~/components/Logo/Logo";
import { Menu, linksMenu } from "~/components/Menu/Menu";
import type { LinksFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Bruna Herminio" },
    { name: "Bruna Herminio Website", content: "Ilustradora e Designer" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Menu />
      <Logo />
    </div>
  );
}

export const links: LinksFunction = () => [
  ...linksLogo(),
  ...linksMenu()
];
