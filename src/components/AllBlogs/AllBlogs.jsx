import { useLoaderData } from "react-router-dom";
import AllBlogCard from "./AllBlogCard";




const AllBlogs = () => {
    const allBlogs = useLoaderData()
    return (
        <div className="mt-20 container mx-auto"> 
            <h2>all blogs page: {allBlogs.length} </h2>
           <div className="grid md:grid-cols-3 gap-5">
            {
                allBlogs.map(allblog => <AllBlogCard key={allblog._id} blog={allblog}></AllBlogCard>)
            }
           </div>
        </div>
    );
};

export default AllBlogs;