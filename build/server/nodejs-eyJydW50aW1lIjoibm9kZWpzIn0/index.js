import { jsx, jsxs } from "react/jsx-runtime";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import { handleRequest } from "@vercel/remix";
import { Analytics } from "@vercel/analytics/react";
function entry_server(request, responseStatusCode, responseHeaders, remixContext) {
  let remixServer = /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url });
  return handleRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixServer
  );
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: entry_server
}, Symbol.toStringTag, { value: "Module" }));
const styles$1 = "/assets/root-QhpNsz5j.css";
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {}),
      /* @__PURE__ */ jsx(Analytics, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const links$1 = () => [
  { rel: "stylesheet", href: styles$1 }
];
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links: links$1
}, Symbol.toStringTag, { value: "Module" }));
const styles = "/assets/Logo-BK0lmpXn.css";
const linksLogo = () => [
  { rel: "stylesheet", href: styles }
];
const Logo = () => {
  return /* @__PURE__ */ jsx("div", { className: "logo-container", children: /* @__PURE__ */ jsx("img", { src: "../../../images/logo.png", alt: "Bruna Herminio", className: "logo" }) });
};
const PrimaryButton = ({ href, text }) => {
  return /* @__PURE__ */ jsx(
    "a",
    {
      target: "_blank",
      href,
      rel: "noreferrer",
      className: "fake-button",
      children: text
    }
  );
};
const meta = () => {
  return [
    { title: "Bruna Herminio" },
    { name: "Bruna Herminio Website", content: "Ilustradora e Designer" }
  ];
};
function Index() {
  return /* @__PURE__ */ jsxs("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ jsx(Logo, {}),
    /* @__PURE__ */ jsx("ul", { className: "link-list", children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(PrimaryButton, { href: "https://brunaherminio.lojavirtualnuvem.com.br/", text: "Loja online" }) }) })
  ] });
}
const links = () => [
  ...linksLogo()
];
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  links,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BDSkmrgt.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-ULJOhd3c.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-BTMbd08_.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-ULJOhd3c.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-4AmrNb8M.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] } }, "url": "/assets/manifest-86904714.js", "version": "86904714" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
