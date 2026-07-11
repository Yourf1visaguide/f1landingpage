// functions/_middleware.ts

export async function onRequest(context: any): Promise<Response> {
  const url = new URL(context.request.url);
  const hostname = url.hostname;

  const routeMap: Record<string, string> = {
    'netherlands.yourf1visaguide.com': '/netherlands',
    'usa.yourf1visaguide.com': '/usa',
    'touristvisas.yourf1visaguide.com': '/tourist-visa',
    'dubai.yourf1visaguide.com': '/dubai',
    'yourf1visaguide.com': '/usa',
    'www.yourf1visaguide.com': '/usa',

  };

  const basePath = routeMap[hostname];

  // No matching subdomain — serve normally
  if (!basePath) {
    return context.next();
  }

  // Assets — let them fall through to root without rewriting
  // /_next/, /favicon, images, fonts etc serve correctly from root
  if (
    url.pathname.startsWith('/_next/') ||
    url.pathname.startsWith('/favicon') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/fonts/') ||
    url.pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|woff|woff2|ttf)$/)
  ) {
    return context.next();
  }

  // Page requests — rewrite to country path
  if (!url.pathname.startsWith(basePath)) {
    const rewrittenUrl = new URL(context.request.url);
    rewrittenUrl.pathname =
      basePath + (url.pathname === '/' ? '/' : url.pathname);

    // ✅ Your pattern — preserves entire request correctly
    const request = new Request(rewrittenUrl.toString(), context.request);
    return fetch(request);
  }

  return context.next();
}