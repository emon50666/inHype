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
          
            <div className="grid md:grid-cols-3 gap-5 mb-10">
                {
                    wishlists.map(wishlist => <WishlistCard key={wishlist._id} wishlist={wishlist}  
                        setWishlist={setWishlist}
                        wishlists={wishlists}
                    ></WishlistCard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;