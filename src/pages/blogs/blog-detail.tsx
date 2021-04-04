import ButtonComponent from "../../components/atoms/button-component";
import Error404 from "../errors/error-404";
import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import useFetch from "../../utils/useFetch";
import { withRouter } from "react-router";

const BlogDetail = (props: any) => {
  const id: string = props.match.params.id;

  // call reusable custom hooks
  const [data, isLoading, hasError, resStatus, resMsg] = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  // console.log(data);
  // console.log(props.history.goBack);
  const ShowBlogDetail = (props: any) => {
    return (
      <Fragment>
        <h1 className="display-4">{props.blog.title}</h1>
        <hr />
        <p className="text-justify">{props.blog.body}</p>
        <div className="mt-3">
          <ButtonComponent
            action={props.history.goBack}
            button_name="Kembali"
            class={"btn btn-sm btn-secondary"}
          ></ButtonComponent>
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      {hasError ? (
        resStatus === 404 ? (
          <Error404 error_status={resStatus} error_message={resMsg} />
        ) : (
          ""
        )
      ) : isLoading ? (
        <Fragment>
          <div className="mt-3">
            <Skeleton count={1} height={80} />
            <hr />
            <Skeleton count={4} />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <ShowBlogDetail blog={data} history={props.history} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default withRouter(BlogDetail);
