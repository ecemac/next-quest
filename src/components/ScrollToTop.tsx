import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 inline-flex lg:hidden items-center justify-center rounded-full bg-zinc-800 p-3 text-white"
    >
      <AiOutlineArrowUp size={20} />
    </button>
  );
};
