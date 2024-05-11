
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../HomePage/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddBlog from "../AddBlog/AddBlog";
import AllBlogs from "../AllBlogs/AllBlogs";
import FeaturedBlogs from "../FeaturedBlogs/FeaturedBlogs";
import Wishlist from "../WishlistPage/Wishlist";

import BlogCard from "../AddBlog/BlogCard";
import BlogDetails from "../AddBlog/BlogDetails";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/blog')
       
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
          path: '/add-blog',
          element: <AddBlog></AddBlog>
        },
        {
          path: '/all-blogs',
          element: <AllBlogs></AllBlogs>
        },
        {
          path: '/feature-blog',
          element: <FeaturedBlogs></FeaturedBlogs>
        },
        {
          path: '/wishlist',
          element: <Wishlist></Wishlist>
        },
        {
          path: '/blog-card',
          element: <BlogCard></BlogCard>,
        },
        {
          path: '/blog-details/:id',
          element: <BlogDetails></BlogDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/blog/${params.id}`)
        }
      
      ]
    },
  ]);

  export default router;