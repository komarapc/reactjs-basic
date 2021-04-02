const Blog = (props: any) => {
  console.log(props);
  return (
    <div className="mb-5">
      <h3 className="font-weight-light">{props.title}</h3>
      {props.blogs.map((blog: any, key: number) => {
        return (
          <div
            key={key}
            className="col-12 p-3 bg-white border rounded shadow-sm mb-3"
          >
            <h5 className="font-weight-normal">{blog.title}</h5>
            <small>Author: {blog.author}</small>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
