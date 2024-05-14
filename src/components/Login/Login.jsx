
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { Link, useLocation, useNavigate,  } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import loginImg from '../../assets/login.png'



const Login = () => {
const {loginUser,error,googleLogin,setError} = useContext(AuthContext)

const navigate = useNavigate();
const location = useLocation();

  const handelLogin = e =>{
    e.preventDefault()
    const form = e.target
   
    const email = form.email.value

    const password = form.password.value
   
  

    loginUser(email,password)

    .then(result =>{
        toast.success('Login Successfully')
        navigate(location?.state ? location?.state : '/')
       
        console.log(result.user)
        
    })
    .catch(error =>{
        console.log(error.message)
        setError(error.message.slice(9))
    })

}





    return (
       <div className="border-violet-200">
        <div className="grid md:grid-cols-2">
        <div className="bg-gray-100 md:p-20">
        <div className="container mx-auto mb-20 ">
       <h1 className="text-3xl text-center font-bold font-serif mb-3 mt-20 ">Login Now</h1>
       <div className="card  shrink-0 w-full max-w-sm shadow-2xl border-b-4 border-[#9268EB] shadow-gray-300 -300/50 justify-center mx-auto">
 <form onSubmit={handelLogin}  className="card-body">
 
   <div className="form-control">
  
     <input name="email"  type="email" placeholder="Email" className="input input-bordered"   />
    
   </div>
  
   <div className="form-control ">
  
    <div className="flex">
    <input name="password"  type=   "password" placeholder="Password" className="input input-bordered w-full" 
     />
 
    </div>
   </div>
  <div className="form-control mt-2 mb-2 ">
   <button   className="btn bg-[#9268EB] hover:bg-black text-white  hover:text-white font-bold text-base font-serif ">Login</button>
 </div> 
 
   
  <div className="grid grid-cols-3 text-center">
  <div className="border-b border-black"><span></span></div>

        <div className=""><h2 className="font-bold h-0 pb-4 items-center ">Or</h2></div>
  
    <div className="border-b border-black"><span></span></div>
  </div>


  <div className="mt-6 mb-4 text-center text-[35px] flex justify-center gap-16 ">
        
        <button onClick={()=> googleLogin()} > <FcGoogle></FcGoogle> </button>
        <button> <GrGithub></GrGithub> </button>

      </div>
<p className="text-sm flex text-center mx-auto gap-2"> Dont Have An Account ? <Link to={'/register'}> <p className="font-serif text-sm  underline underline-offset-2 text-[#5c2eff] ">Register</p></Link> </p>

{
        error && <p className="text-red-500  font-sm mt-2 mb-5 text-center ">{error}</p>
      }
 </form>
 
  
</div>
<Toaster />
   </div>

       </div>
       <div className="pt-10 mt-28">
        <img src={loginImg} alt="" className="w-[445px] rounded-lg  hover:animate-spin " />
       </div>
        </div>
       </div>
    );
};

export default Login;