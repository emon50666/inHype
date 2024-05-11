import { Link, useLoaderData } from 'react-router-dom';
import banner_1 from '../../assets/food-1.png'
import BlogCard from '../AddBlog/BlogCard';
import news from '../../assets/news.png'

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
      <section className='mt-20 bg-violet-200'>
        <div className='container mx-auto pt-10 pb-10'>
        <div className=''>
        <h1 className="text-3xl font-serif text-center font-bold mb-10">Newsletter </h1>
        </div>
        <div className='grid md:grid-cols-2'>
          <div className='items-center '>
            <h1 className='text-3xl  capitalize font-bold'>join Our news letter</h1>
            <p className='mr-5'>Delve into the depths of knowledge with our latest newsletter, where we unravel captivating insights, explore emerging trends, and share expert perspectives. From groundbreaking research to thought-provoking analysis, let us be your guide through the maze of information in this months edition. Stay informed, stay inspired!</p>
            <div className='mt-5'>
            <input type="text" placeholder="Email" className="input input-bordered input-success w-full max-w-xs" /> 
            <button className="bg-violet-800  relative -left-20 hover:bg-[#9268EB]  text-white rounded-lg  font-bold text-base pb-3  pl-4 pr-4 pt-3">Submit</button>
            </div>
          </div>
          <div>
            <img src={news} alt="" className='w-full rounded-lg' />
          </div>
        </div>
        </div>
      </section>
        </div>
    );
};

export default Home;