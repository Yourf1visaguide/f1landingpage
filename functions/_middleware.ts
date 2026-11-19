// Cloudflare Pages middleware: serves each country landing page on its own subdomain.
//   usa.yourf1visaguide.com/        → /usa/          (URL in the browser stays the same)
//   www.yourf1visaguide.com/...     → 301 to yourf1visaguide.com/...
//   yourf1visaguide.com/...         → served normally (home page and all other pages)
// Every subdomain listed here must also be added under Pages → Custom domains.

type Context = {
  request: Request;
  env: { ASSETS: { fetch: (input: Request | URL | string) => Promise<Response> } };
  next: () => Promise<Response>;
};

const APEX = "yourf1visaguide.com";

const SUBDOMAIN_PATHS: Record<string, string> = {
  "usa.yourf1visaguide.com": "/usa",
  "netherlands.yourf1visaguide.com": "/netherlands",
  "dubai.yourf1visaguide.com": "/dubai",
  "touristvisas.yourf1visaguide.com": "/tourist-visa",
};

/** Files (anything with an extension) and Next.js build output are shared by every page. */
const isSharedFile = (pathname: string) => pathname.startsWith("/_next/") || /\.[a-z0-9]+$/i.test(pathname);

export async function onRequest({ request, env, next }: Context): Promise<Response> {
  const url = new URL(request.url);


  const basePath = SUBDOMAIN_PATHS[url.hostname];
  if (!basePath || isSharedFile(url.pathname)) return next();
  if (url.pathname === basePath || url.pathname.startsWith(`${basePath}/`)) return next();

  // Serve the country page from this deployment's own files (no extra network request).
  // The site is exported with trailing slashes, so /usa becomes /usa/ (its index.html).
  const path = `${basePath}${url.pathname}`;
  url.pathname = path.endsWith("/") ? path : `${path}/`;
  return env.ASSETS.fetch(new Request(url.toString(), request));
}