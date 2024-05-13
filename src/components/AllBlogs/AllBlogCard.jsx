import { Link } from "react-router-dom";


import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const AllBlogCard = ({blog}) => {

    const {user} = useContext(AuthContext)
    console.log(user)
    const {title,shortdesc,url,_id,category,} = blog;



 









    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <div className="absolute ">
            <p className="relative bg-violet-800 p-1 left-1 top-1 font-bold text-base rounded-md text-white
             pr-5 pl-5">{category} </p>
            </div>
  <figure><img src={url} className="w-full h-[200px] " /></figure>



  <div className="card-body">
    <h2 className="card-title underline text-violet-500">{title.slice(0,24)+ '...'} </h2>
    <p>{shortdesc.slice(0,49)+ '...'}  </p>
    <div className="card-actions justify-between ">
    <Link to={`/blog-details/${_id}`}><button className="bg-violet-800 hover:bg-[#9268EB]  text-white rounded-lg  font-bold text-base pb-2  pl-2 pr-2 pt-2">View Details</button></Link>

    <Link to={'/wishlist'}><button  className="border-[#9268EB] flex  border  text-violet-800 rounded-lg  font-bold  pb-2  pl-2 pr-2 pt-2">Wishlist </button></Link>

    
  
    </div>
  </div>
</div>
        </div>
    );
};

export default AllBlogCard;