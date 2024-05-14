import { useLoaderData } from "react-router-dom";
import AllBlogCard from "./AllBlogCard";
import { useState } from "react";

const AllBlogs = () => {
    const allBlogs = useLoaderData();
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = event => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchResults(allBlogs.filter(blog => blog.title.toLowerCase().includes(searchTerm)));
    };

    const handleCategory = event => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchResults(allBlogs.filter(blog => blog.category.toLowerCase().includes(searchTerm)));
    };

    return (
        <div className="mt-28 container text-center  mx-auto mb-10 ">
            <div className="">
            <div className="mb-10 grid md:flex justify-center gap-5  text-center">
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={handleSearch}
                    className="input input-bordered-2 w-full border border-[#9268EB] max-w-xs"
                />
                <select name="category" onChange={handleCategory} className="select select-bordered mb-2 md:w-full border border-[#9268EB] max-w-xs">
                <option disabled selected>Filter By  Category</option>
                <option>Pizza</option>
                <option>Meat</option>
                <option>vegetable</option>
                <option>Soup</option>
                <option>Salad</option>
                <option>Sweet</option>
                </select>
            </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
                {searchResults.length > 0 ? (
                    searchResults.map(blog => <AllBlogCard key={blog._id} blog={blog} />)
                ) : (
                    allBlogs.map(blog => <AllBlogCard key={blog._id} blog={blog} />)
                )}
            </div>
        </div>
    );
};

export default AllBlogs;
