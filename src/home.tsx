import { Fragment } from "react";
import MainPage from "./pages/main";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const Home = () => {
  const title: string = "Home Components";
  const persons: { id: number; person_name: string; email: string }[] = [
    {
      id: 0,
      person_name: "Komar",
      email: "komar.izmi@gmail.com",
    },
    {
      id: 1,
      person_name: "Haruka",
      email: "haruka@gmail.com",
    },
  ];

  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <Sidebar />
          </div>
          <div className="col-sm-12 col-md-8">
            <MainPage />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
