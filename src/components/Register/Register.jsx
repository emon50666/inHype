import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import registerimg from '../../assets/register.png'
const Register = () => {
const {registerUser,error,setError} = useContext(AuthContext)
const navigate = useNavigate();

    const handelRegister = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const image = form.image.value
        const password = form.password.value
        const newUser = {name,email,image,password}
        console.log(newUser)

        setError('')



        if(password.length <6){
          setError('place 6 digit password');
          return;
          
      }
        if(!/[A-Z]/.test(password) ){
          setError('Give an uppercase &  Lowercase Letter (A - Z)');
          return;
         }
         if(!/[a-z]/.test(password) ){
          setError('Give an uppercase & Lowercase  Letter (a,z)');
          return;
         }
         if(!/[0-9]/.test(password) ){
          setError('Give an numeric character (0-9)');
          return;
         }
         if (!/[@#$]/.test(password)) {
          setError('Password must include a special character ( @ # $ )');
          return false;
        }

        registerUser(email,password)

        .then(result =>{
            toast.success('Account Create Successfully')
            navigate('/')
           
            console.log(result.user)
              // update profile
              updateProfile(result.user,{
                displayName: name,
                photoURL: image
            })
        })
        .catch(error =>{
            console.log(error.message)
        })

    }
    return (
       <div className="grid md:grid-cols-2">
        <div className="">
        <div className="bg-gray-100 md:p-20">
        <div className="container mx-auto mb-20 ">
       <h1 className="text-3xl text-center font-bold font-serif  pt-20">Register Now</h1>
       <div className="card shrink-0 w-full max-w-sm shadow-2xl border-b-4 border-[#9268EB] shadow-gray-300 -300/50 justify-center mx-auto">
 <form  onSubmit={handelRegister} className="card-body">
 <div className="form-control">
     <label className="label">
       
     </label>
     <input  name="name"  type="name" placeholder="Name" className="input input-bordered" required  />
   </div>
   <div className="form-control">
    
     <input name="email"  type="email" placeholder="Email" className="input input-bordered" required  />
    
   </div>
   <div className="form-control">
   
     <input name="image"  type="photo" placeholder="Photo url" className="input input-bordered" 
     
   
     />
   </div>
   <div className="form-control ">
   
    <div className="flex">
    <input name="password"  type="password" placeholder="Password" className="input input-bordered w-full" required
     />
 
    </div>
   </div>
  <div className="form-control mt-2 mb-2 ">
   <button   className="btn bg-[#9268EB] hover:bg-black text-white hover:text-white font-bold text-base font-serif ">Register</button>
 </div> 
 
   <p className="text-sm flex text-center mx-auto gap-2"> All Ready Have An  Account ? <Link to={'/login'}> <p className="font-serif text-sm  underline underline-offset-2 text-[#5c2eff] ">Login</p></Link> </p>
  

   {
        error && <p className="text-red-500  font-sm mt-2 mb-5 text-center ">{error}</p>
      }

 </form>
</div>
<Toaster />
   </div>

      </div>
        </div>
        <div className="flex justify-center">
          <img src={registerimg} alt="" />
        </div>
       </div>
    );
};

export default Register;