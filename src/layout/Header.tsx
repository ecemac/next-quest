import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { useGameSearch } from "../hooks/useGameSearch";
import { SearchResults } from "../components/SearchResults";

interface HeaderProps {
  onToggleMobile?: () => void;
}

export const Header = ({ onToggleMobile }: HeaderProps) => {
  const [searchInput, setSearchInput] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { data, isLoading } = useGameSearch(searchInput);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    setIsSearchOpen(true);
  };

  const handleGameSelect = () => {
    // Clear search after selection
    setSearchInput("");
    setIsSearchOpen(false);
  };

  const showResults = searchInput.length > 0 && isSearchOpen;

  return (
    <header className="p-4 sticky top-0 z-40 bg-[#151515] lg:bg-transparent">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onToggleMobile}
          aria-label="Open menu"
          className="lg:hidden inline-flex items-center justify-center p-2"
        >
          <HiOutlineMenu size={24} />
        </button>
        <Link to="/" className="flex-shrink-0">
          <h1>NEXT QUEST</h1>
        </Link>
        <div ref={containerRef} className="flex-1 max-w-xs relative">
          <input
            type="text"
            placeholder="Oyun ara..."
            value={searchInput}
            onChange={(e) => handleSearchChange(e.target.value)}
            onFocus={() => setIsSearchOpen(true)}
            className="w-full px-3 py-2 bg-[#222] border border-[#333] rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#555] transition-colors"
          />
          <SearchResults
            games={data?.results || []}
            isLoading={isLoading}
            isVisible={showResults}
            onSelectGame={handleGameSelect}
          />
        </div>
        <div className="w-6 flex-shrink-0" />
      </div>
    </header>
  );
};
