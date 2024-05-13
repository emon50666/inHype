

const WishlistCard = ({wishlist}) => {
    const {title} = wishlist
    
    return (
        <div className="mt-20 text-center">
            <h2>wishlist card:{title} </h2>
        </div>
    );
};

export default WishlistCard;