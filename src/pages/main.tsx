import { Fragment, useEffect, useState } from "react";

import Blog from "./blog";
import Error404 from "./errors/error-404";
import Skeleton from "react-loading-skeleton";
import useFetch from "../utils/useFetch";

const MainPage = (props: any) => {
  const url: string = "http://localhost:8000/blogs";

  const [data, isLoading, hasError, resStatus, resMsg] = useFetch(url);
  const [blogs, setBlogs] = useState<any>([]);
  // const [data, setData] = useState<any[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [hasError, setHasError] = useState<boolean>(false);
  // const [errorStatus, setErrorStatus] = useState<number>();
  // const [errorMsg, setErrorMsg] = useState<string>("");

  const handleDeleteBlog = (id: number) => {
    const newData = blogs.filter((blog: any) => blog.id !== id);
    setBlogs(newData);
  };

  useEffect(() => {
    setBlogs(data);
  }, [data]);

  return (
    <div>
      <h4 className="display-4">{props.title}</h4>
      {/* <h1 className="font-weight-normal">&gt;Blog Components</h1> */}
      <hr />
      {isLoading ? (
        hasError ? (
          resStatus + " " + resMsg
        ) : (
          <Fragment>
            <Skeleton count={4} circle={true} />
          </Fragment>
        )
      ) : (
        <Fragment>
          <Blog
            blogs={blogs}
            title="All blogs"
            has_delete_button={true}
            action_button={handleDeleteBlog}
          />
          <Blog
            blogs={blogs.filter((blog: any) => blog.author === "Komar")}
            title="Komar blogs"
            has_delete_button={true}
            action_button={handleDeleteBlog}
          />
        </Fragment>
      )}
    </div>
  );
};

export default MainPage;
