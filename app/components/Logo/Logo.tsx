import type { LinksFunction } from "@remix-run/node";
import logo from "~/images/logo.png";
import styles from "~/styles/Logo.css?url";

export const linksLogo: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Bruna Herminio" className="logo" />
    </div>
  )
};