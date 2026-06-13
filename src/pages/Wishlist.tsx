import { useWishlist } from "../hooks/useWishlist";
import { Card } from "../components/Card";

export const Wishlist = () => {
  const { wishlist, isInWishlist, toggleWishlist } = useWishlist();

  return (
    <div className="py-6 px-8">
      <div className="mb-12">
        <h2 className="mb-4">My Wishlist</h2>
        <p>Here are the games you've added to your wishlist.</p>
      </div>
      {wishlist.length === 0 ? (
        <section
          aria-labelledby="wishlist-heading"
          className="rounded-lg bg-zinc-800 p-6 text-gray-300"
        >
          <h3 id="wishlist-heading" className="mb-4 text-xl font-semibold text-white">
            Wishlist is empty
          </h3>
          <p>
            You haven’t added any games yet. Browse the Discover page and tap the heart icon to add games to your wishlist.
          </p>
        </section>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlist.map((game) => (
            <Card
              key={game.id}
              game={game}
              isWishlisted={isInWishlist(game.id)}
              onToggleWishlist={toggleWishlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};
