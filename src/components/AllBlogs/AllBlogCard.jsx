import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const AllBlogCard = ({blog}) => {

    const {user} = useContext(AuthContext)
    console.log(user)
    const {title,shortdesc,url,_id,category,} = blog;


    const handelAddWishlist = (blog) => {
    
      const wishEmail = { ...blog, userEmail: user.email ,blogId:blog._id};
    delete wishEmail._id
      
      fetch('https://exame-11-server.vercel.app/wishlist', {
        method: "POST",
        headers: {
          'content-type': "application/json"
        },
        body: JSON.stringify(wishEmail)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId  ){
          toast.success('Wishlist Add Successfully!');
      }
      })
      .catch(error => {
        console.error('Error adding to wishlist:', error);
      });
    }
    
 





    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <div className="absolute ">
            <p className="relative bg-violet-800 animate-pulse p-1 left-1 top-1 font-bold text-base rounded-md text-white
             pr-5 pl-5">{category} </p>
            </div>
  <figure><img src={url} className="w-full h-[200px] " /></figure>



  <div className="card-body">
    <h2 className="card-title underline text-violet-500">{title.slice(0,24)+ '...'} </h2>
    <p className="text-start">{shortdesc.slice(0,49)+ '...'}  </p>
    <div className="card-actions justify-between ">
    <Link to={`/blog-details/${_id}`}><button className="bg-violet-800 hover:bg-[#9268EB]  text-white rounded-lg  font-bold text-base pb-2  pl-2 pr-2 pt-2">View Details</button></Link>

    <button onClick={()=>handelAddWishlist(blog)} className="border-[#9268EB] flex  border  text-violet-800 rounded-lg  font-bold text-base pb-2  pl-4 pr-4 pt-2">Wishlist </button>

    
  
    </div>
  </div>
  <Toaster />
</div>
        </div>
    );
};



AllBlogCard.propTypes = {
  blog: PropTypes.object,
 
};


export default AllBlogCard;