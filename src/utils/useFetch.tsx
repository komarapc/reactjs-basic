import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [resStatus, setResStatus] = useState<number>();
  const [resMsg, setResMsg] = useState<string>("");

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      // http://localhost:8000/blogs
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            setHasError(true);
            setResStatus(res.status);
            setResMsg(res.statusText);
            throw Error(resMsg);
          } else {
            setHasError(false);
            setResStatus(res.status);
            setResMsg(res.statusText);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((e) => {
          // console.log(e.message);
          if (e.name === "AbortError") {
            //code
          } else {
            setIsLoading(true);
            setResMsg(e.message);
          }
        });
    }, 500);
    return () => {
      abortCont.abort();
    };
  }, [url, resMsg]);
  return [data, isLoading, hasError, resStatus, resMsg];
};

export default useFetch;
