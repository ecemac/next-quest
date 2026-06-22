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
  const {
    data,
    isLoading,
    debouncedQuery,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGameSearch(searchInput);

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

  const showResults =
    searchInput.length > 0 &&
    isSearchOpen &&
    debouncedQuery.length > 0 &&
    searchInput === debouncedQuery;

  return (
    <header className="py-4 px-8 sticky top-0 z-40 bg-[#151515]">
      <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <button
            type="button"
            onClick={onToggleMobile}
            aria-label="Open menu"
            className="lg:hidden inline-flex items-center justify-center p-2"
          >
            <HiOutlineMenu size={24} />
          </button>

          <div className="flex-1 flex justify-center lg:justify-start">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-center lg:text-left">NEXT QUEST</h1>
            </Link>
          </div>

          <div className="w-10 lg:hidden" />
        </div>

        <div ref={containerRef} className="w-full lg:flex-1 lg:ml-32 relative">
          <input
            type="text"
            placeholder="Search game..."
            value={searchInput}
            onChange={(e) => handleSearchChange(e.target.value)}
            onFocus={() => setIsSearchOpen(true)}
            className="w-full pr-10 px-3 py-2 bg-[#222] border border-[#333] rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#555] transition-colors"
          />
          {searchInput && (
            <button
              type="button"
              onClick={() => {
                setSearchInput("");
                setIsSearchOpen(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 bg-transparent hover:text-gray-100"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
          <SearchResults
            games={data?.pages.flatMap((page) => page.results) || []}
            totalCount={data?.pages?.[0]?.count ?? 0}
            isLoading={isLoading}
            isVisible={showResults}
            hasMore={Boolean(hasNextPage)}
            isFetchingMore={Boolean(isFetchingNextPage)}
            onLoadMore={fetchNextPage}
            onSelectGame={handleGameSelect}
          />
        </div>
      </div>
    </header>
  );
};
