const BlogDetails = () => {
    // Your existing code

    // Filter out blog posts with no comments
    const blogsWithComments = comments.filter(comment => comment.blogId === blog._id);

    return (
        <div className="mt-[90px] container mx-auto ">
            {/* Your existing code */}
            {/* comment data show */}
            <div className="mt-10 border border-dashed p-4 rounded-lg">
                {/* Your existing code */}
                <div>
                    <div>
                        {
                            // Render comments only if the blog post has comments
                            blogsWithComments.length > 0 &&
                            blogsWithComments.map(comment => (
                                <li key={comment._id}>
                                    {/* Display comment details here */}
                                    <p>{comment.name}: {comment.comment}</p>
                                </li>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* Your existing code */}
        </div>
    );
};
