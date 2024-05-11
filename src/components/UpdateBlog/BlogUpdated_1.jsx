
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const BlogUpdated_1 = () => {
    const {user} = useContext(AuthContext)
    const [blogs,setBlog] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/email/${user?.email}`)
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setBlog(data) 
        })
    },[user])
    return (
        <div className="mt-20">
            <h2>update blog page : {blogs.length} </h2>
        </div>
    );
};

export default BlogUpdated_1;