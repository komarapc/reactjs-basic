import { Fragment } from "react";
import MainPage from "./pages/main";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import track_lists from "./data/track-list";

const Home = () => {
  const title: string = "Using State";
  const current_track_list: number = 8;
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="container">
        <div className="row p-3">
          <div className="col-sm-12 col-md-3 rounded text-left pt-3 pb-3">
            <Sidebar
              data_track_lists={track_lists}
              current_track_list={current_track_list}
            />
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
