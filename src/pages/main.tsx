import { useEffect, useState } from "react";

import Blog from "./blog";
import Error404 from "./errors/error-404";

const MainPage = (props: any) => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorStatus, setErrorStatus] = useState<number>();
  const [errorMsg, setErrorMsg] = useState<string>();

  const url: string = "http://localhost:8000/blogss";

  useEffect(() => {
    setTimeout(() => {
      // http://localhost:8000/blogs
      fetch(url)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            setHasError(true);
            setErrorStatus(res.status);
            setErrorMsg(res.statusText);
            throw Error(errorMsg);
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }, 1000);
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
      {isLoading
        ? [
            hasError ? (
              <Error404
                url={url}
                error_status={errorStatus}
                error_message={errorMsg}
              />
            ) : (
              "Loading..."
            ),
          ]
        : [
            <div>
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
            </div>,
          ]}
    </div>
  );
};

export default MainPage;
