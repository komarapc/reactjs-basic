import { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Blog from "./blogs";
import Skeleton from "react-loading-skeleton";
import useFetch from "../utils/useFetch";

// import Error404 from "./errors/error-404";

const MainPage = (props: any) => {
  const url: string = "http://localhost:8000/blogs";
  const history = useHistory();
  const [data, isLoading, hasError, resStatus, resMsg] = useFetch(url);
  const [blogs, setBlogs] = useState<any>([]);
  // const [data, setData] = useState<any[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [hasError, setHasError] = useState<boolean>(false);
  // const [errorStatus, setErrorStatus] = useState<number>();
  // const [errorMsg, setErrorMsg] = useState<string>("");

  const handleDeleteBlog = (id: number) => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
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
            <div className="mb-3">
              <Skeleton count={4} circle={true} />
            </div>
            <div className="mb-3">
              <Skeleton count={4} duration={2} circle={true} />
            </div>
          </Fragment>
        )
      ) : (
        <Fragment>
          <div className="mb-3">
            <Link to="/blogs/create" className="btn btn-sm btn-primary mr-1">
              Create New Blog
            </Link>
            <Link to="/blogs/create-blog" className="btn btn-sm btn-primary">
              Create New - useInput()
            </Link>
          </div>
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
