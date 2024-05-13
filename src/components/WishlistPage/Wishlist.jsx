import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import WishlistCard from "./WishlistCard";




const Wishlist = () => {
    const {user} = useContext(AuthContext);
    const [wishlists,setWishlist] = useState([]);

    useEffect(()=>{
        if(user?.email){
            fetch(`http://localhost:5000/wishlist/${user?.email}`)
            .then(res=>res.json())
            .then(data =>{
                console.log(data)
                setWishlist(data) 
            })
        }
       
    },[user])

    
   
    return (
        <div className="mt-20 container mx-auto">
            <h2>all wishlist: {wishlists.length}   </h2>
            <div>
                {
                    wishlists.map(wishlist => <WishlistCard key={wishlist._id} wishlist={wishlist} ></WishlistCard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;