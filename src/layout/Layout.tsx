import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ScrollToTop } from "../components/ScrollToTop";
import { AiOutlineClose } from "react-icons/ai";

export const Layout = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileMenu]);

  return (
    <>
      <Header onToggleMobile={() => setShowMobileMenu((s) => !s)} />
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>

      <ScrollToTop />

      {showMobileMenu && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setShowMobileMenu(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-72 bg-zinc-900 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="mb-6 inline-flex items-center justify-center p-2"
              onClick={() => setShowMobileMenu(false)}
              aria-label="Close menu"
            >
              <AiOutlineClose size={20} />
            </button>
            <Sidebar mobile onNavigate={() => setShowMobileMenu(false)} />
          </div>
        </div>
      )}
    </>
  );
};
