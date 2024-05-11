import { Link, useLoaderData } from 'react-router-dom';
import banner_1 from '../../assets/food-1.png'
import BlogCard from '../AddBlog/BlogCard';


const Home = () => {
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
      <section>
        <div>
          <h2>Join Our News Letter</h2>
        </div>
      </section>
        </div>
    );
};

export default Home;