import { Link, withRouter } from "react-router-dom";

const Error404 = (props: any) => {
  return (
    <div>
      <div className="text-center mt-5">
        <h4 className="display-4">
          {props.error_status} {props.error_message}
        </h4>
        <Link to="/">Back to homepage</Link>
      </div>
    </div>
  );
};

export default withRouter(Error404);
