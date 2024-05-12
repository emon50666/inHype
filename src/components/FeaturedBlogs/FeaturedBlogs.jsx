import { useLoaderData } from "react-router-dom";
import FeatureBlogTable from "./FeatureBlogTable";



const FeaturedBlogs = () => {
    const featuredBlogs = useLoaderData()
    
    console.log(featuredBlogs)
    return (
        <div className="mt-20 bg-violet-100">
            
            <div className="container mx-auto">
                {
                    featuredBlogs.map(feature => <FeatureBlogTable key={feature._id} feature={feature} ></FeatureBlogTable>)
                }
            </div>

        </div>
    );
};

export default FeaturedBlogs;