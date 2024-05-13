import {  FaFacebook, FaGithub,  } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
        <footer className="footer p-10 bg-black text-gray-400 ">
  <aside>
  <div className="font-bold font-serif text-[20px] md:text-3xl logo ">
<Link> <h2 className="gap-0 text-[#9268EB] ">InHype </h2> </Link>
</div>
    <p>At InHype, we are passionate about staying ahead <br /> of the curve and bringing  you the latest insights, <br /> stories, and inspirations from around the world </p>
   
  </aside> 
  
  
  <nav>
    <h6 className="footer-title">User Links</h6> 
    <li className="marker:text-[#9268EB]  "><a className="link link-hover">Blogs</a></li>
    <li className="marker:text-[#9268EB]  "><a className="link link-hover">Best Food  Blog</a></li>
    <li className="marker:text-[#9268EB]  "><a className="link link-hover">Recent Blog</a></li>

  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <li className="marker:text-[#9268EB]  "><a className="link link-hover">Terms of use</a></li>
    <li className="marker:text-[#9268EB]  "><a className="link link-hover">Privacy policy</a></li>
    <li className="marker:text-[#9268EB]  "><a className="link link-hover">Cookie policy</a></li>

   
  </nav>
  <nav>
    <h6 className="footer-title">Follow Us</h6> 
    <div className="grid grid-flow-col gap-4 mt-2">
    <Link to={'https://www.facebook.com/profile.php?id=100080623072389'}> <FaFacebook className="text-2xl"></FaFacebook> </Link>
    <Link to={'https://github.com/emon50666'}> <FaGithub  className="text-2xl" ></FaGithub> </Link>
    <Link to={'https://linkedin.com'}> <IoLogoLinkedin  className="text-2xl"></IoLogoLinkedin> </Link>

    </div>
  </nav> 
</footer>

<div className="bg-[#000923] text-gray-500 text-center pb-2 text-base border-t border-gray-700 pt-3">
<p>Copyright © 2024 - All right reserved</p>
</div>
        </div>
    );
};

export default Footer;