

import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddBlog = () => {

   const {user} = useContext(AuthContext)

    const handelAddBlog = event =>{

        event.preventDefault();
        const form = event.target 
        const title = form.title.value 
        const url = form.url.value 
        const category = form.category.value
        const  shortdesc = form.shortdesc.value 
        const Description = form.Description.value 
        const userEmail = user?.email
        const photoUrl = user?.photoURL
        const displayName = user?.displayName

      
        

        
        const newBlog = {title,url,category,shortdesc,Description,userEmail,photoUrl,displayName, date:new Date(),} 
        console.log(newBlog)

        // send data to the server side
        fetch('http://localhost:5000/blog',{
            method: "POST",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(newBlog)
        }
        )
        .then(res=> res.json())
        .then(data => {
            
            console.log('data',data)
            if(data.blogResult.insertedId > 0 ){
                toast.success('Blog Add Successfully!');
            }
        })
    }

    return (
        <div className="mt-[90px] md:w-[1000px] mb-[90px] container mx-auto p-3  ">
            <h1 className="text-3xl font-serif text-center font-bold mb-4">Add Your Blog</h1>
            <form onSubmit={handelAddBlog}>
                <div className="  text-center">
                <input type="text" name="title" required placeholder="Blog Title" className="input  mb-2 input-bordered border border-[#9268EB] w-full max-w-xs" /> <br />
                <input type="url" required name="url" placeholder="Image URL" className="input mb-2 input-bordered  border border-[#9268EB] w-full max-w-xs" /> <br />
                <select name="category" className="select select-bordered mb-2 w-full border border-[#9268EB] max-w-xs">
                <option disabled selected>Category</option>
                <option>Pizza</option>
                <option>Meat</option>
                <option>vegetable</option>
                <option>Soup</option>
                <option>Salad</option>
                <option>Sweet</option>
                <option>Mango</option>




                </select> <br />
                <input type="text" name="shortdesc" placeholder="Short Description" className="input  mb-2 input-bordered  border border-[#9268EB] w-full max-w-xs" /> <br />
                <textarea name="Description" placeholder="Description" className="textarea  border border-[#9268EB] textarea-bordered textarea-lg w-full max-w-xs" ></textarea> <br />
                <button  className="btn btn-outline w-2/6  btn-primary">Submit</button>

                
                </div>
               
               
            </form>
            <Toaster />
        </div>
    );
};

export default AddBlog;