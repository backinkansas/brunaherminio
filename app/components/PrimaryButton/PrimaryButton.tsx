import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import styles from "~/styles/PrimaryButton.css";

export const linksPrimaryButton: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const PrimaryButton = ({ href, text }) => {
  return (
    <a
      target="_blank"
      href={href}
      rel="noreferrer"
      className="fake-button"
    >
      {text}
    </a>
  )
};