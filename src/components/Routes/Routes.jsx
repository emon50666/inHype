
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
import UpdateBlog from "../UpdateBlog/UpdateBlog";

import FeatureBlogTable from "../FeaturedBlogs/FeatureBlogTable";
import PrivateRoute from './../../PrivateRoute/PrivateRoute';
import WishlistCard from "../WishlistPage/WishlistCard";

import Error from "../Error/Error";





  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    errorElement: <Error></Error>,
     
      children:[
        {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://exame-11-server.vercel.app/blog')
       
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
          element: <AllBlogs></AllBlogs>,
          loader: () => fetch('https://exame-11-server.vercel.app/allblogs')
        },
        {
          path: '/feature-blog',
          element: <FeaturedBlogs></FeaturedBlogs>,
          loader: () => fetch('https://exame-11-server.vercel.app/featureblog')
        },
        {
          path: '/featureBlogTable',
          element: <FeatureBlogTable></FeatureBlogTable>
        },
        {
          path: '/wishlist',
          element: <Wishlist></Wishlist>,
         

         
        },
        {
          path: '/wishlistcard',
          element: <WishlistCard></WishlistCard>
        },
        {
          path: '/blog-card',
          element: <BlogCard></BlogCard>,
        },
        {
          path: '/blog-details/:id',
          element:<PrivateRoute> <BlogDetails></BlogDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://exame-11-server.vercel.app/blog/${params.id}`)
        },
        {
          path: 'update-blog/:id',
          element: <UpdateBlog></UpdateBlog>,
          loader: ({params}) => fetch(`https://exame-11-server.vercel.app/blog/${params.id}`)
        },
       
      
      ]
    },
  ]);

  export default router;