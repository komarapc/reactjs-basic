import { useEffect, useState } from "react";

import Blog from "./blog";

const MainPage = (props: any) => {
  const [blog_lists, setBlogLists] = useState([
    {
      id: 1,
      title: "First Blog",
      author: "Admin",
    },
    {
      id: 2,
      title: "Second Blog",
      author: "Haruka",
    },
    {
      id: 3,
      title: "Third Blog",
      author: "Haruka",
    },
    {
      id: 4,
      title: "Fourth Blog",
      author: "Admin",
    },
  ]);

  const handleDeleteBlog = (id: number) => {
    const newBlog = blog_lists.filter((blog) => blog.id !== id);
    setBlogLists(newBlog);
  };

  useEffect(() => {
    console.log("use effect is running");
  });

  return (
    <div>
      <h4 className="display-4">{props.title}</h4>
      {/* <h1 className="font-weight-normal">&gt;Blog Components</h1> */}
      <hr />
      <Blog
        blogs={blog_lists}
        title="All blog's"
        is_button_delete={true}
        delete_blog={handleDeleteBlog}
      />
      <Blog
        blogs={blog_lists.filter((blog: any) => blog.author === "Admin")}
        title="Admin blog's"
        is_button_delete={false}
      />
      <Blog
        blogs={blog_lists.filter((blog: any) => blog.author === "Haruka")}
        title="Haruka blog's"
        is_button_delete={false}
      />
    </div>
  );
};

export default MainPage;
