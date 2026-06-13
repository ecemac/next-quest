import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="min-w-64 px-8 py-12 lg:sticky lg:top-16 lg:self-start">
      <nav aria-label="Main navigation">
        <ul className="space-y-8">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="wishlist" className="text-gray-300 hover:text-white">
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
