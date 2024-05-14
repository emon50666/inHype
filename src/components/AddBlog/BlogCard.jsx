
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

const BlogCard = ({blog}) => {
 const {user} = useContext(AuthContext)
 
    const {title,shortdesc,url,_id,category} = blog;
   
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
            <div className="card  bg-violet-100 shadow-xl">
            <div className="absolute ">
            <p className="relative bg-violet-800 p-1 left-1 top-1 font-bold text-base rounded-md text-white
             pr-5 pl-5">{category} </p>
            </div>
          <Link to={`/blog-details/${_id}`}>  <figure><img src={url} className="w-full hover:animate-pulse h-[200px] rounded-lg " /></figure></Link>



  <div className="card-body">
   <Link to={`/blog-details/${_id}`}> <h2 className="card-title hover:text-violet-900 hover:animate-bounce underline text-violet-500">{title.slice(0,24)+ '...'} </h2></Link>
    <p>{shortdesc.slice(0,49)+ '...'}  </p>
    <div className="card-actions mt-2 justify-between">
    <Link to={`/blog-details/${_id}`}><button className="bg-violet-800 hover:bg-[#9268EB]  text-white rounded-lg  font-bold text-base pb-2  pl-4 pr-4 pt-2">View Details</button></Link>

   <button onClick={()=>handelAddWishlist(blog)} className="border-[#9268EB] flex  border  text-violet-800 rounded-lg  font-bold text-base pb-2  pl-4 pr-4 pt-2">Wishlist </button>
    </div>
  </div>
  <Toaster />
</div>
        </div>
    );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
 
};

export default BlogCard;