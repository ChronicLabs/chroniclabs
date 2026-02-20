import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * ScrollToTop component
 * Scrolls to the top of the page whenever the route changes
 */
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
