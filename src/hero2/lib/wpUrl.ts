// src/lib/wpUrl.ts
export function rewriteWpUrl(url?: string | null): string | undefined {
  if (!url) return undefined;

  // base คือ domain ของ WordPress จาก GraphQL endpoint
  const base = new URL(import.meta.env.PUBLIC_WP_GRAPHQL!).origin;

  // ถ้า url มันเป็น relative (เช่น /wp-content/uploads/xxx.jpg)
  if (url.startsWith("/")) {
    return `${base}${url}`;
  }

  // ถ้า url มันเป็น absolute ของ WP อยู่แล้ว → replace domain ให้ตรงกับ base
  return url.replace(/^https?:\/\/[^/]+/i, base);
}
