import { Link } from "react-router-dom";

interface SidebarProps {
  onNavigate?: () => void;
  mobile?: boolean;
}

export const Sidebar = ({ onNavigate, mobile = false }: SidebarProps) => {
  const baseClass = mobile
    ? "w-full h-full"
    : "hidden lg:block min-w-64 lg:sticky lg:top-16 lg:self-start";

  return (
    <aside className={`${baseClass} px-8 py-12`} aria-hidden={!mobile && undefined}>
      <nav aria-label="Main navigation">
        <ul className="space-y-8">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white" onClick={onNavigate}>
              Home
            </Link>
          </li>
          <li>
            <Link to="wishlist" className="text-gray-300 hover:text-white" onClick={onNavigate}>
              Wishlist
            </Link>
          </li>
          <li>
            <span className="text-gray-400">Top Rated</span>
          </li>
          <li>
            <span className="text-gray-400">Genres</span>
          </li>
          <li>
            <span className="text-gray-400">Platforms</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
