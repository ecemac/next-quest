import { useRef, useEffect } from "react";
import { useGames } from "../hooks/useGames";
import { Card } from "../components/Card";

export const Home = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames();
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || !loadMoreRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading)
    return (
      <p role="status" aria-live="polite">
        Loading...
      </p>
    );
  if (error)
    return (
      <p role="status" aria-live="polite">
        Error: {(error as Error).message}
      </p>
    );

  const allGames = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <div className="py-6 px-8">
      <section aria-labelledby="discover-heading" className="mb-12">
        <h2 id="discover-heading" className="mb-4">
          Discover
        </h2>
        <p>Browse our popular and suggested games</p>
      </section>
      {allGames.length === 0 ? (
        <p role="status" aria-live="polite">
          No games available right now. Please try again later.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allGames.map((game) => (
            <Card key={game.id} game={game} />
          ))}
        </div>
      )}
      {isFetchingNextPage && (
        <p role="status" aria-live="polite">
          Loading more...
        </p>
      )}
      {hasNextPage && <div ref={loadMoreRef} className="h-10"></div>}
    </div>
  );
};
