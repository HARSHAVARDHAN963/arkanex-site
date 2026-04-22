import { useEffect, useMemo, useState } from "react";

export type PanelId = "home" | "technology" | "partners" | "largeScale" | "contact";

const HASH_TO_PANEL: Record<string, PanelId> = {
  home: "home",
  technology: "technology",
  partners: "partners",
  "large-scale": "largeScale",
  contact: "contact",
};

const PANEL_TO_HASH: Record<PanelId, string> = {
  home: "",
  technology: "technology",
  partners: "partners",
  largeScale: "large-scale",
  contact: "contact",
};

const getPanelFromHash = (hash: string): PanelId => {
  const key = hash.replace(/^#/, "");
  return HASH_TO_PANEL[key] ?? "home";
};

export function useActivePanel() {
  const initialPanel = useMemo(() => {
    if (typeof window === "undefined") return "home" as PanelId;
    return getPanelFromHash(window.location.hash);
  }, []);

  const [activePanel, setActivePanel] = useState<PanelId>(initialPanel);

  useEffect(() => {
    const syncFromLocation = () => {
      setActivePanel(getPanelFromHash(window.location.hash));
    };

    window.addEventListener("hashchange", syncFromLocation);
    window.addEventListener("popstate", syncFromLocation);
    return () => {
      window.removeEventListener("hashchange", syncFromLocation);
      window.removeEventListener("popstate", syncFromLocation);
    };
  }, []);

  const setPanel = (panel: PanelId) => {
    setActivePanel(panel);
    const hash = PANEL_TO_HASH[panel];
    const nextUrl = `${window.location.pathname}${window.location.search}${hash ? `#${hash}` : ""}`;
    window.history.pushState(null, "", nextUrl);
  };

  return { activePanel, setPanel };
}
