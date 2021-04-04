import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutPage from "./pages/about";
import { Fragment } from "react";
import MainPage from "./pages/main";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import track_lists from "./data/track-list";

const Home = () => {
  const current_track_list: number = 20;
  const tracks = track_lists.filter((track) => track.id === current_track_list);
  const title: string = tracks[0].track_name;
  return (
    <Fragment>
      <Router basename="react-basic">
        <Navbar></Navbar>
        <div className="container">
          <div className="row p-3">
            <div className="col-sm-12 col-md-4 rounded text-left pt-3 pb-3 ">
              <Sidebar
                data_track_lists={track_lists}
                current_track_list={current_track_list}
              />
            </div>
            <div className="col-sm-12 col-md-8 text-left">
              {/* title = props, data_person = props */}
              <Switch>
                <Route exact path="/">
                  <MainPage title={title} />
                </Route>
                <Route exact path="/about">
                  <AboutPage title="About"></AboutPage>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Fragment>
  );
};

export default Home;
