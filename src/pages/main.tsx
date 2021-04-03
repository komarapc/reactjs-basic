import { useEffect, useState } from "react";

import Blog from "./blog";

const MainPage = (props: any) => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  const handleDeleteBlog = (id: number) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };

  return (
    <div>
      <h4 className="display-4">{props.title}</h4>
      {/* <h1 className="font-weight-normal">&gt;Blog Components</h1> */}
      <hr />
      <Blog
        blogs={blogs}
        title="All blogs"
        has_button_delete={true}
        delete_blog={handleDeleteBlog}
      />
      <Blog
        title="Komar blog's"
        blogs={blogs.filter((blog: any) => blog.author === "Komar")}
        is_button_delete={false}
      />
      <Blog
        title="Ayana blog's"
        blogs={blogs.filter((blog: any) => blog.author === "Ayana")}
        is_button_delete={false}
      />

      <Blog
        title="Ayana blog's"
        blogs={blogs.filter((blog: any) => blog.author === "Haruka")}
        is_button_delete={false}
      />
    </div>
  );
};

export default MainPage;
