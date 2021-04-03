import { useEffect, useState } from "react";

import Blog from "./blog";
import Error404 from "./errors/error-404";

const MainPage = (props: any) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorStatus, setErrorStatus] = useState<number>();
  const [errorMsg, setErrorMsg] = useState<string>("");

  const url: string = "http://localhost:8000/blogs";

  const handleDeleteBlog = (id: number) => {
    const newData = data.filter((data: any) => data.id !== id);
    setData(newData);
  };

  useEffect(() => {
    setTimeout(() => {
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
          setData(data);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }, 1000);
  }, [url, errorMsg]);
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
                blogs={data}
                title="All blogs"
                has_button_delete={true}
                delete_blog={handleDeleteBlog}
              />
              <Blog
                title="Komar blog's"
                blogs={data.filter((blog: any) => blog.author === "Komar")}
                has_button_delete={false}
              />
              <Blog
                title="Ayana blog's"
                blogs={data.filter((blog: any) => blog.author === "Ayana")}
                has_button_delete={false}
              />
              <Blog
                title="Ayana blog's"
                blogs={data.filter((blog: any) => blog.author === "Haruka")}
                has_button_delete={false}
              />
            </div>,
          ]}
    </div>
  );
};

export default MainPage;
