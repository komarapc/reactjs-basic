const Logout = (props: any) => {
  return (
    <div>
      <p>You have sign in</p>
      <button className="btn btn-sm btn-primary" onClick={props.isAuth}>
        {props.button_name}
      </button>
    </div>
  );
};

export default Logout;
