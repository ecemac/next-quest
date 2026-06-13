import { Link } from "react-router-dom";
import { usePlatforms } from "../hooks/usePlatforms";

export const Sidebar = () => {
  const { data } = usePlatforms();
  console.log(data);
  return (
    <aside className="min-w-64 px-8 py-12">
      <nav>
        <ul className="space-y-8">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white">
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link to="wishlist" className="text-gray-300 hover:text-white">
              <h3>Wishlist</h3>
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-300 hover:text-white">
              <h3>Top Rated</h3>
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-300 hover:text-white">
              <h3>Genres</h3>
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-300 hover:text-white">
              <h3>Platforms</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
