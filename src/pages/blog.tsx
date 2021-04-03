const Blog = (props: any) => {
  return (
    <div className="mb-5">
      <h3 className="font-weight-light">{props.title}</h3>
      {props.blogs.length < 1 ? "No Post" : null}
      {props.blogs.map((blog: any, key: number) => {
        return (
          <div
            key={key}
            className="col-12 p-3 bg-white border rounded shadow-sm mb-3"
          >
            <h5 className="font-weight-normal">{blog.title}</h5>
            <small>Author: {blog.author}</small>
            {props.has_button_delete ? (
              <div>
                <button
                  className="btn btn-sm btn-danger mt-2"
                  onClick={() => props.delete_blog(blog.id)}
                >
                  Delete
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
