import { Fragment } from "react";
import { Helmet } from "react-helmet";

const Head = (props: any) => {
  return (
    <Fragment>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
    </Fragment>
  );
};

export default Head;
