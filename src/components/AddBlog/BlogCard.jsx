

const BlogCard = ({blog}) => {
    const {title,url,shortdesc,category} = blog;
    return (
        <div className="mt-10">
           <div className="card  bg-base-100 shadow-xl">
            <div className="absolute">
            <p className="relative bg-violet-800 p-1 left-1 top-1 font-bold text-base rounded-md text-white
             pr-5 pl-5">{category} </p>
            </div>
  <figure><img src={url}  alt="" className="w-full h-[200px] " /></figure>
  <div className="card-body">
  <h2  className="card-title">{title.substring(0, 25) + '...'}</h2>
    <p>{shortdesc.substring(0,49) + '...'} </p>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BlogCard;