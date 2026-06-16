import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

interface HeaderProps {
  onToggleMobile?: () => void;
}

export const Header = ({ onToggleMobile }: HeaderProps) => {
  return (
    <header className="p-4 sticky top-0 z-40 bg-[#151515] lg:bg-transparent">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onToggleMobile}
          aria-label="Open menu"
          className="lg:hidden inline-flex items-center justify-center p-2"
        >
          <HiOutlineMenu size={24} />
        </button>
        <Link to="/">
          <h1>NEXT QUEST</h1>
        </Link>
        <div className="w-6" />
      </div>
    </header>
  );
};
