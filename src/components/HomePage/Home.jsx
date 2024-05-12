import { Link, useLoaderData } from 'react-router-dom';
import banner_1 from '../../assets/food-1.png'
import BlogCard from '../AddBlog/BlogCard';
import news from '../../assets/news.png'



import toast, { Toaster } from 'react-hot-toast';


const Home = () => {
  const notify = () => toast.success(' Thank you for subscribing to our newsletter.');
  const blogs = useLoaderData()
    return (
        <div>
         

            <div className="hero min-h-screen" style={{backgroundImage: `url(${banner_1})`}}>
                <div className="hero-overlay bg-opacity-75"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg pt-16">
                        <h1 className="mb-5 text-5xl md:text-8xl text-white  font-bold">Fresh Fields Farmstand</h1>
                        
                        <Link to={'/add-blog'}><button className="bg-violet-800 hover:bg-[#9268EB]  text-white rounded-lg  font-bold text-2xl pb-2  pl-4 pr-4 pt-2">Get Started</button></Link>
                    </div>
                </div>
            </div>


{/* recent blog section */}
      <section className="mt-10 mb-10">
        <div>
        <h1 className="text-3xl font-serif text-center font-bold mb-4">Recent Blog </h1>
      <div className='grid md:grid-cols-3 gap-5 container mx-auto '>

      {
      blogs.slice(0,6).map(blog =><BlogCard key={blog._id} blog={blog}></BlogCard> )
      }

     


      </div>
        </div>
       <div className='text-center mt-5'>
       <Link to={'/all-blogs'}><button className="bg-violet-800 hover:bg-[#9268EB]  text-white rounded-lg  font-bold text-base pb-2  pl-4 pr-4 pt-2">View All Blogs</button></Link>
       </div>
      </section>




      {/* news letter section */}
      <section className='mt-20 bg-violet-200'>
        <div className='container mx-auto pt-10 pb-10'>
        <div className=''>
        <h1 className="text-3xl font-serif text-center font-bold mb-10">Newsletter </h1>
        </div>
        <div className='grid md:grid-cols-2'>
          <div className='items-center px-2 '>
            <h1 className='text-3xl  capitalize mb-2 font-bold'>join Our news letter</h1>
            <p className='mr-5'>Delve into the depths of knowledge with our latest newsletter, where we unravel captivating insights, explore emerging trends, and share expert perspectives. From groundbreaking research to thought-provoking analysis, let us be your guide through the maze of information in this months edition. Stay informed, stay inspired!</p>
            <div className='mt-5 '>
            <input type="email"  name='email' placeholder="Email" className="input input-bordered input-success w-full max-w-xs" /> 
            <button onClick={notify}className="bg-violet-800  relative -right-56 -top-12  md:-right-60 md:-top-12 lg:-top-0 lg:-left-20 hover:bg-[#9268EB]  text-white rounded-lg  font-bold text-base pb-3  pl-4 pr-4 pt-3">Submit</button>
            </div>
            <Toaster />
          </div>
          <div>
            <img src={news} alt="" className='w-full rounded-lg' />
          </div>
        </div>
        </div>
      </section>

      {/* most popular recipe */}
      <section className='mt-10 mb-10 bg-gray-100 p-5 '>
        <div>
        <h1 className='text-3xl text-center  capitalize mb-2 font-bold'>Most Popular Recipes</h1>
        </div>
        <div className='container mx-auto grid md:grid-cols-4 gap-5 mt-5 mb-5'>
          <div className='shadow-lg shadow-violet-200 rounded-lg justify-center m-auto p-5 '>
            <img src="https://i.ibb.co/BPWbB0F/images-4.jpg" className='rounded-lg w-[200px] h-[150px] ' />
            <h1 className=' mt-2 text-2xl font-bold'>Pizza</h1>
          </div>
          <div className='shadow-lg shadow-violet-200 rounded-lg justify-center m-auto p-5'>
            <img src="https://i.ibb.co/f205n1J/images-5.jpg" className='rounded-lg w-[200px] h-[150px] ' />
            <h1 className=' mt-2 text-2xl font-bold'>Meat</h1>
          </div>
          <div className='shadow-lg shadow-violet-200 rounded-lg justify-center m-auto p-5'>
            <img src="https://i.ibb.co/t3mBSgC/images-6.jpg" className='rounded-lg w-[200px]  h-[150px]' />
            <h1 className=' mt-2 text-2xl font-bold'>Soup</h1>
          </div>
          <div className='shadow-lg shadow-violet-200 rounded-lg justify-center m-auto p-5'>
            <img src="https://i.ibb.co/vjcgsh0/images-7.jpg" className='rounded-lg w-[200px]  h-[150px]' />
            <h1 className=' mt-2 text-2xl font-bold'>Salad</h1>
          </div>
        </div>
      </section>

      {/* meet our shep */}
      <section className='mb-10'>
        <div>
        <h1 className='text-3xl text-center  capitalize mb-2 font-bold'>Meet our experienced cooks</h1>
        </div>
        <div className='grid md:grid-cols-3 gap-5 mt-5 mb-5'>
          <div className='shadow-lg shadow-violet-200 bg-violet-200 rounded-lg justify-center m-auto p-5 '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREvizD2tBxCTLnMqzP3jY-UQ66iFtu97R6JlBC3xs355Vca7zP8sz6affS-7hUcuyUMxo" className='rounded-lg  h-[200px]' />
            
          </div>
          <div className='shadow-lg shadow-violet-200  bg-violet-200 rounded-lg justify-center m-auto p-5'>
            <img src="https://as2.ftcdn.net/v2/jpg/01/91/91/13/1000_F_191911363_xYU7eIUubY0EilXkCbf9YYlDk7dzhOrV.jpg" className='rounded-lg  h-[200px] ' />
           
          </div>
          <div className='shadow-lg shadow-violet-200 bg-violet-200 rounded-lg justify-center m-auto p-5 '>
            <img src="https://zbinworld.com/wp-content/uploads/2023/03/chiko.jpg" className='rounded-lg  h-[200px]' />
            
          </div>
          
        </div>
      </section>
        </div>
    );
};

export default Home;