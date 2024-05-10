import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from '../../assets/Screenshot_6.png'


const Header = () => {
  const {user,logOutUser} = useContext(AuthContext)
    return (
        <div>
       <div className="navbar container mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content gap-3 font-bold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <Link to={'/'}><li className="hover:text-[#9268EB]">Home</li></Link>
    <Link to={'/add-blog'}> <li className="hover:text-[#9268EB]">Add Blog</li></Link>
    <Link to={'/all-blogs'}> <li className="hover:text-[#9268EB]"  >All Blogs</li></Link>
    <Link to={'/feature-blog'}> <li className="hover:text-[#9268EB]">Featured Blogs</li></Link>
    <Link to={'/Wishlist'}> <li className="hover:text-[#9268EB]">Wishlist</li></Link>


   {
    user ? '' : <>
     <div className="">
 <Link to={'/register'}><button className=" mb-2 bg-[#9268EB]  pb-2  pl-4 pr-4 pt-2 capitalize text-white font-bold font-serif rounded-lg mr-5">register</button></Link>
  <Link to={'/login'}><button className="border-[#795FE9] border pb-2  font-bold font-serif rounded-lg text-[#795FE9] hover:bg-[#9268EB]  hover:text-white pl-4 pr-4 pt-2 capitalize ">register</button></Link>
 </div>
 </>
   }
      </ul>
    </div>
    <Link> <img src={logo}  className="w-[150px] mobile rounded-lg" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal justify-right text-black font-serif font-bold gap-8 px-1">
    <Link to={'/'}><li className="hover:text-[#9268EB] ">Home</li></Link>
    <Link to={'/add-blog'}> <li className="hover:text-[#9268EB]">Add Blog</li></Link>
    <Link to={'/all-blogs'}> <li className="hover:text-[#9268EB]"  >All Blogs</li></Link>
    <Link to={'/feature-blog'}> <li className="hover:text-[#9268EB]">Featured Blogs</li></Link>
    <Link to={'/Wishlist'}> <li className="hover:text-[#9268EB]">Wishlist</li></Link>

  


    </ul>
  </div>
  <div className="navbar-end">
  {
    user ? <div className="dropdown dropdown-end  pik">
    <div tabIndex={0} role="button" className="buton btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full border ">
       {
        user && user.photoURL ? (
          <img referrerPolicy="no-referrer" src={user.photoURL}  />
        ) : (
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfhfRCjTlu-H5p0BfBD_GI6QopG5FIKVPYg&s" alt="Default Profile" />
        )
       }
       
      </div>
    </div>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
       {user &&  <h4 className="font-semibold capitalize hover:bg-white"> {user.displayName} </h4>}
      


      </li>
     <Link to={'/login'}> <button onClick={()=> logOutUser()}  className="bg-[#9268EB]  w-full mr-4 text-white rounded-lg pt-2 pb-2 pr-8 pl-8 font-bold ">LogOut</button></Link>
    
    </ul>
      
  </div> : <>
 <div className="log">
 <Link to={'/register'}><button className=" bg-[#9268EB]  pb-2  pl-4 pr-4 pt-2 capitalize text-white font-bold font-serif rounded-lg mr-5">register</button></Link>
  <Link to={'/login'}><button className="border-[#795FE9] border pb-2  font-bold font-serif rounded-lg text-[#795FE9] hover:bg-[#9268EB]  hover:text-white pl-4 pr-4 pt-2 capitalize ">register</button></Link>
 </div>
  </>

   }
  </div>
</div>
        </div>
    );
};

export default Header;