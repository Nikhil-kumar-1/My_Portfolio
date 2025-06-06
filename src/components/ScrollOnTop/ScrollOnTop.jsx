import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll page to top on pathname change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component does not render anything
};

export default ScrollToTop;
