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
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  const allGames = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <div className="py-6 px-8">
      <div className="mb-12">
        <h2 className="mb-4">Discover</h2>
        <p>Browse our popular and suggested games</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allGames?.map((game) => (
          <Card key={game.id} {...game} />
        ))}
      </div>
      {isFetchingNextPage && <p>Loading more...</p>}
      {hasNextPage && <div ref={loadMoreRef} className="h-10"></div>}
    </div>
  );
};
