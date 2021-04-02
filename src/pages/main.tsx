import Login from "./auth/login";
import Logout from "./auth/logout";
import { useState } from "react";

const MainPage = (props: any) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = () => {
    isAuth ? setIsAuth(false) : setIsAuth(true);
  };

  return (
    <div>
      <h4 className="display-4">{props.title}</h4>
      {isAuth ? (
        <Logout button_name="Sign Out" isAuth={handleAuth} />
      ) : (
        <Login button_name="Sign In" isAuth={handleAuth} />
      )}
    </div>
  );
};

export default MainPage;
