import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";


const BlogDetails = () => {
    const blog = useLoaderData();
  

    const {user} = useContext(AuthContext)
   
    const {title,shortdesc,url,Description,category,_id,} = blog;

console.log(user,blog)
   

 const [comments,setComment] = useState([])


// specific  id useEffect 
useEffect(()=>{
  fetch(`http://localhost:5000/comment/${_id}`)
  .then(res=>res.json())
  .then(data =>{
      console.log(data)
      setComment(data) 
  })
},[_id])



    const handelComment = e =>{

    

        e.preventDefault()
        const form = e.target 
        const name = form.name.value
        const comment = form.comment.value
        const userName = user.userName
        const id = _id
        const userPhoto = user?.photoURL
      
        const newComment = {name,comment,userName,userPhoto,id,}
        console.log(newComment)

        fetch(`http://localhost:5000/comment/`,{
          method: "POST",
          headers:{
            'content-type': "application/json"
        },
        body: JSON.stringify(newComment)

        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          setComment(data)
          if(data.insertedId){
            toast.success('Comment Successfully!');
          }
         
        })
        .catch(error =>{
          console.log('fetch error',error)
        })
        

    }


    return (
        <div className="mt-[90px] container mx-auto ">
                 <div className="card  bg-base-100 shadow-xl">
           
  <figure><img src={url} className="w-full  md:h-[500px] "  /></figure>

  
  <div className="card-body">
    {/* faEdit start */}
    <div className="flex justify-between">
    <h2 className="card-title underline text-violet-500">{title} </h2>
    {

  user?.email == blog?.userEmail && (
    
    <Link to={`/update-blog/${_id}`}>
      <button className="border-[#9268EB] flex mt-1 border text-violet-800 rounded-lg font-bold pb-2 pl-2 pr-2 pt-2">
        <FaEdit />
      </button>
    </Link>
  )
}


    </div>
    {/* faEdit end */}
    <p>{shortdesc}  </p>
   

<p className=" bg-violet-800 w-48 p-1 gap-5 flex left-1 top-1 font-bold text-base rounded-md text-white
 pr-5 pl-5"> <span className="">Category: </span> {category} </p>
 <p>{Description} </p>
            
   
  </div>
</div>


{/* comment data show */}



  {comments.length >0 ?    <div className="mt-10 border border-dashed p-4 rounded-lg shadow-md border-violet-500">
 { comments.map((comment) => (
    <p className="text-violet-600 border border-dotted mt-2 rounded-lg p-2 text-base" key={comment._id}>
      <span className="font-bold text-black capitalize">
        {comment.name}</span>
        <img src={comment.userPhoto}  className="w-[50px] rounded-full border border-dashed  " />  
        {comment.comment} 
    </p>
  ))}
  </div>  : <p className="mt-10 font-bold border rounded-lg border-dashed border-violet-300 p-2">No Comment Yet !</p>
     }
   

 

{/* comment section */}
    <div className="mt-20">
      
        
    {
    
    user?.email !== blog?.userEmail ?  <>
    <h2 className="mb-4 text-2xl capitalize">comment now</h2>
    <form onSubmit={handelComment}>

    <input type="text" name="name" required placeholder="Your Name" className="input mb-2 input-bordered border border-[#9268EB] w-full max-w-xs" /> <br />
 
 <textarea name="comment" placeholder="Comment" required className="textarea   border border-[#9268EB] textarea-bordered textarea-lg w-full max-w-xs" ></textarea> <br />
 <button className="bg-violet-800 mb-5 hover:bg-[#9268EB]  text-white rounded-lg  font-bold text-1xl pb-2  pl-4 pr-4 pt-2">Post Comment</button>
    </form> 
    </>
    : <p className="text-2xl font-bold mb-5">no comment box </p>
  }
</div>
<Toaster />
        </div>
    );
};

export default BlogDetails;