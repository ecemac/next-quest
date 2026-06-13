import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="p-8">
      <Link to="/">
        <h1>NEXT QUEST</h1>
      </Link>
    </header>
  );
};
