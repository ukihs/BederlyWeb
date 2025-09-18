// lib/wp.ts (มีอยู่แล้ว)
export function toWpLangEnum(lang: "th" | "en"): "TH" | "EN" {
  return lang.toUpperCase() as "TH" | "EN";
}

export async function wpQuery<T>(query: string, variables?: Record<string, any>) {
  const endpoint = import.meta.env.PUBLIC_WP_GRAPHQL!;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables })
  });

  const json = await res.json();
  if (!res.ok || json.errors) {
    console.error("WPGraphQL error payload:", json.errors ?? json);
    throw new Error("WPGraphQL fetch failed");
  }
  return json.data as T;
}
