// functions/_middleware.ts

export async function onRequest(context: any): Promise<Response> {
  const url = new URL(context.request.url);
  const hostname = url.hostname;

  const routeMap: Record<string, string> = {
    'netherlands.yourf1visaguide.com': '/netherlands',
    'usa.yourf1visaguide.com': '/usa',
  };

  const basePath = routeMap[hostname];

  if (basePath && !url.pathname.startsWith(basePath)) {
    const rewrittenUrl = new URL(context.request.url);
    rewrittenUrl.pathname =
      basePath + (url.pathname === '/' ? '/' : url.pathname);

    return fetch(rewrittenUrl.toString(), {
      method: context.request.method,
      headers: context.request.headers,
      body: context.request.body,
    });
  }

  return context.next();
}