import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Error = () => {
    return (
       
             <div className=" ">
                <Header></Header>
            <div className="justify-center container mx-auto mt-20">
                <img src="https://static.vecteezy.com/system/resources/previews/022/752/919/non_2x/delivery-guy-taking-break-empty-state-illustration-editable-404-not-found-for-ux-ui-design-fast-food-restaurant-isolated-flat-cartoon-character-on-white-error-flash-message-for-website-app-vector.jpg" alt="" className="w-[250px] rounded-lg text-center m-auto" />
            </div>
            <div><h1 className="mt-5 mb-5 text-center font-bold text-2xl">Sorry Page Not Found !</h1></div>
            <Footer></Footer>
        </div>
        
    );
};

export default Error;