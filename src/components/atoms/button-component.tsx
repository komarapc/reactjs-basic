import { Fragment } from "react";

const ButtonComponent = (props: any) => {
  return (
    <Fragment>
      <button className={props.class} onClick={props.action}>
        {props.button_name}
      </button>
    </Fragment>
  );
};

export default ButtonComponent;
