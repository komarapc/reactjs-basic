import { Fragment } from "react";
import MainPage from "./pages/main";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const Home = () => {
  const title: string = "Using State";

  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="container">
        <div className="row p-3">
          <div className="col-sm-12 col-md-3 border rounded text-left">
            <Sidebar />
          </div>
          <div className="col-sm-12 col-md-9 text-left">
            <MainPage title={title} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
