import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BF6 Mods",
  description: "Tools to develop mods effectively for Battlefield 6",
  base: "/bf6mods/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/guide/getting-started" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Importing A Project", link: "/guide/importing-a-project" },
          { text: "Configuration", link: "/guide/config" },
          { text: "Strings", link: "/guide/strings" },
          { text: "Deployment", link: "/guide/deployment" },
          { text: "Standard Library", link: "/guide/standard-library" },
        ],
      },
      {
        text: "Contributing",
        items: [
          {
            text: "How to contribute",
            link: "/contributing/how-to-contribute",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/bf6mods/bf6mods" },
    ],
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/bf6mods/favicon-96x96.png",
        sizes: "96x96",
      },
    ],
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/bf6mods/favicon.svg" },
    ],
    ["link", { rel: "shortcut icon", href: "/bf6mods/favicon.ico" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/bf6mods/apple-touch-icon.png",
      },
    ],
    ["link", { rel: "manifest", href: "/bf6mods/site.webmanifest" }],
  ],
});
