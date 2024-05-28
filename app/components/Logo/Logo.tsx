import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import styles from "./Logo.css?url";

export const linksLogo: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const Logo = () => {
  return (
    <div className="logo-container">
      <img src="../../../images/logo.png" alt="Bruna Herminio" className="logo" />
    </div>
  )
};