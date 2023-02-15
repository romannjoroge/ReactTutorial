function Blogs ({blogs, title, deleteBlog}){
    return (
        <div className="blogs">
            <h2>{ title }</h2>
            <div className="blogs-list">
                { blogs.map((blog) => (
                    <div className="blog-preview" key = {blog.id}>
                        <h2>{ blog.title }</h2>
                        <p>Written By: { blog.author }</p>
                        <button onClick={ () => deleteBlog(blog.id) }>Delete Blog</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs;