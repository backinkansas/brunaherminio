import type { MetaFunction } from "@vercel/remix";
import {
  Logo,
  linksLogo,
} from "~/components/Logo/Logo";
import type { LinksFunction } from "@remix-run/node";
import { PrimaryButton, linksPrimaryButton } from "~/components/PrimaryButton/PrimaryButton";

export const meta: MetaFunction = () => {
  return [
    { title: "Bruna Herminio" },
    { name: "Bruna Herminio Website", content: "Ilustradora e Designer" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Logo />
      <ul className="link-list">
        <li>
          <PrimaryButton href={'https://brunaherminio.lojavirtualnuvem.com.br/'} text="Loja online" />
        </li>
      </ul>
    </div>
  );
}

export const links: LinksFunction = () => [
  ...linksLogo(),
  ...linksPrimaryButton()
];
