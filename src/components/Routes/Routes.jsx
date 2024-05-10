
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
import PrivateRoute from "../../PrivateRoute/PrivateRoute";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
        path: '/',
        element: <Home></Home>
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
          element: <PrivateRoute><AllBlogs></AllBlogs></PrivateRoute>
        },
        {
          path: '/feature-blog',
          element: <FeaturedBlogs></FeaturedBlogs>
        },
        {
          path: '/wishlist',
          element: <Wishlist></Wishlist>
        }
      ]
    },
  ]);

  export default router;