import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const FeatureBlogTable = ({feature,index}) => {
    const {user} = useContext(AuthContext)
   
 
    const userPhoto = user?.photoURL

    const {title,url,_id,category,}  = feature;


    return (
        <div>
            <table className="table">
    {/* head */}
    <thead>
      <tr className="border border-gray-200">
        
        <th>Blog Owner</th>
        <th>Blog Title</th>
        
        <th> Serial Number</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
              <img src={feature?.photoUrl} alt="Avatar Tailwind CSS Component" />
                
                
              </div>
            </div>
            <div>
              <div className="font-bold">{feature?.displayName} </div>
              
            </div>
          </div>
        </td>
        <td>
         
          
          <span className="badge badge-ghost  badge-sm">{title.slice(0,30) + '...'} </span>
        </td>
        <td>
  {index}
   
        </td>
        
      </tr>
      
    </tbody>
   
    
  </table>
        </div>
    );
};

export default FeatureBlogTable;