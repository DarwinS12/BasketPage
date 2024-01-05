import { useEffect } from "react";

export function useSEO({ title, img }) {
  useEffect(() => {
    document.title = title;
    document.querySelector('link[rel="icon"]')?.setAttribute("href", img);
  }, [title, img]);
}
