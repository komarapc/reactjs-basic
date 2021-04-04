import { Fragment } from "react";

const AboutPage = (props: any) => {
  return (
    <Fragment>
      <div>
        <h1 className="display-4">{props.title}</h1>
      </div>
    </Fragment>
  );
};

export default AboutPage;
