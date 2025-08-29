// lib/i18n.ts
export type UiLang = "TH" | "EN";

export function getLangFromPath(pathname: string): UiLang {
  return pathname.startsWith("/en") ? "EN" : "TH";
}

export function toLangFilter(ui: UiLang): "TH" | "EN" {
  return ui;
}

// เพิ่ม helper แปลง en/th -> EN/TH
export function toWpLangEnumFromPathSeg(seg: string): "TH" | "EN" {
  return seg?.toLowerCase() === "en" ? "EN" : "TH";
}
