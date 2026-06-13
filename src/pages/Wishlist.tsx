export const Wishlist = () => {
  return (
    <div className="py-6 px-8">
      <div className="mb-12">
        <h2 className="mb-4">My Wishlist</h2>
        <p>Here are the games you've added to your wishlist.</p>
      </div>
      <section aria-labelledby="wishlist-heading" className="rounded-lg bg-zinc-800 p-6 text-gray-300">
        <h3 id="wishlist-heading" className="mb-4 text-xl font-semibold text-white">
          Wishlist is empty
        </h3>
        <p>
          You haven’t added any games yet. Browse the Discover page and tap the heart icon to add games to your wishlist.
        </p>
      </section>
    </div>
  );
};
