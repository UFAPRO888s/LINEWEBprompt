module.exports = {
  reactStrictMode: false,
  trailingSlash: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: false,
  },
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx"],
  eslint: {
    dirs: ["pages", "components", "lib", "scripts"],
  },
  images: {
    domains: ["liff.line.me", "obs.line-scdn.net","profile.line-scdn.net"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  env: {
    LIFF_ID: "1661040653-4knqkL7j",
    LIFF_URL: "1661040653-4knqkL7j",
  },
};
