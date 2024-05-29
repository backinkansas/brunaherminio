import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/Menu.css?url";

export const linksMenu: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const Menu = () => {
  return (
    <div className="menu-container">
      <ul className="menu-list">
        <li className="menu-item">
          <a
            target="_blank"
            href="https://brunaherminio.lojavirtualnuvem.com.br/"
            rel="noreferrer"
            className="link"
          >
            Loja
          </a>
        </li>
        <li className="menu-item">
          <a
            target="_blank"
            href="https://www.instagram.com/herminioilustra"
            rel="noreferrer"
            className="link"
          >
            Instagram
          </a>
        </li>
        <li className="menu-item">
          <a
            target="_blank"
            href="https://www.behance.net/herminiobruna"
            rel="noreferrer"
            className="link"
          >
            Portfólio
          </a>
        </li>
      </ul>
    </div>
  )
};