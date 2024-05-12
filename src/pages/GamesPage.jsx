import React from 'react';
import NewDeals from "../components/NewDeals";

const GamesPage = ({ addToWishlist }) => {
    return (
        <div>
            <h1>Games Page</h1>
            <p>Welcome to the Games Page!</p>
        <NewDeals onAddToWishlist={addToWishlist}/>
        </div>
    );
}

export default GamesPage;
