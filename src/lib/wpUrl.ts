// src/lib/wpUrl.ts
const graphql = import.meta.env.PUBLIC_WP_GRAPHQL;
const WP_BASE = new URL(graphql).origin; // https://<TUNNEL_URL>

export function rewriteWpUrl(url?: string | null) {
  if (!url) return url ?? "";
  try {
    // แทน host เดิม (astro-wp-demo.local หรือ localhost:port) ด้วยโดเมน tunnel
    return url.replace(/^https?:\/\/[^/]+/i, WP_BASE);
  } catch {
    return url;
  }
}
