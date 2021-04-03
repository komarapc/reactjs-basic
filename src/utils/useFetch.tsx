import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorStatus, setErrorStatus] = useState<number>();
  const [errorMsg, setErrorMsg] = useState<string>("");

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
          setData(data);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }, 1000);
  }, [url, errorMsg]);
  return { data, isLoading, hasError, errorStatus, errorMsg };
};

export default useFetch;
