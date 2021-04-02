const Login = (props: any) => {
  return (
    <div>
      <p>You need sign in</p>
      <button className="btn btn-sm btn-primary" onClick={props.isAuth}>
        {props.button_name}
      </button>
    </div>
  );
};

export default Login;
