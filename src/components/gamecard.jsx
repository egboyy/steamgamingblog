import React from "react";

const GameCard = ({ deal, onAddToWishlist, wishlistItems = [] }) => {

  const isWishlisted = wishlistItems.some((item) => item.id === deal.id);
  const handleClick = () => {
    onAddToWishlist(deal);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={`https://source.unsplash.com/random/300x200?game+${deal.name}`} 
          alt={deal.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{deal.name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-green-600">{deal.discount}</span>
            <span className="font-bold">{deal.price}</span>
          </div>
          <button
            onClick={handleClick}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full ${
              isWishlisted ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isWishlisted} 
          >
            {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
          </button>
        </div>
      </div>
  );
};

export default GameCard;

