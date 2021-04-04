const Error404 = (props: any) => {
  return (
    <div>
      <div className="text-center">
        <h4>
          {props.error_status} {props.error_message}
        </h4>
      </div>
    </div>
  );
};

export default Error404;
