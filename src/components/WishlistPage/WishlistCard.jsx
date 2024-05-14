
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const WishlistCard = ({wishlist,setWishlist,wishlists}) => {
    const {title,shortdesc,url,blogId,category,_id}  = wishlist;

    const handelDelete = _id => {
        console.log('deleted',_id)


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#000",
            cancelButtonColor: "#9268EB",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/wishlist/${_id}`,{
                    method: "DELETE",
                   
                })
                .then(res=> res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Wishlist Has Been Deleted.",
                            icon: "success"
                          }
                        
                        );
                        const remining = wishlists.filter(w => w._id !== _id)
                        setWishlist(remining)
                    }
                })
              
            }
            
          });

    }

    
    return (
        <div className="mt-10  text-center container mx-auto  ">
        <div className="card  bg-blue-100/50 shadow-xl">
        <div className="absolute ">
            <p className="relative bg-violet-800 p-1 left-1 top-1 font-bold text-base rounded-md text-white
             pr-5 pl-5">{category} </p>
            </div>
            <Link to={`/blog-details/${blogId}`}><figure><img src={url} className="w-full hover:animate-ping h-[200px] rounded-lg " /></figure></Link>
            <div className="card-body">
            <Link  to={`/blog-details/${blogId}`}><h2 className="card-title hover:text-blue-800 underline text-violet-500">{title.slice(0,24)+ '...'} </h2></Link>
                <p className="text-start">{shortdesc.slice(0,49)+ '...'}  </p>

                <div className="card-actions justify-between ">
                <Link to={`/blog-details/${blogId}`}><button className="bg-violet-800 hover:bg-[#9268EB]  text-white rounded-lg  font-bold text-base pb-2  pl-4 pr-4 pt-2">View Details</button></Link>
                <button onClick={()=>handelDelete(_id)} className="bg-red-500 hover:bg-[#9268EB]  text-white rounded-lg  font-bold text-base pb-2  pl-4 pr-4 pt-2">Remove </button>
                </div>
  </div>
</div>

        </div>
    );
};


WishlistCard.propTypes = {
    wishlist: PropTypes.object,
    setWishlist:PropTypes.array,
    wishlists: PropTypes
   
  };


export default WishlistCard;