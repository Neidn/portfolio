import { HashRouter, Route, Switch } from "react-router-dom";
import { settings } from "../portfolio.js";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Error404 from "../pages/errors/error404/Error";

import styles from "./Main.module.css";

const Main = (props) => {
  if (settings.isSplash) {
    return (
      <>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Splash theme={props.theme} />}
            />
            <Route
              path="/home"
              component={() => <Home {...props} theme={props.theme} />}
            />
            <Route
              path="/experience"
              exact
              component={() => <Experience {...props} theme={props.theme} />}
            />
            <Route
              path="/education"
              component={() => <Education {...props} theme={props.theme} />}
            />
            {/*
            <Route
              path="/opensource"
              component={() => <Opensource {...props} theme={props.theme} />}
            />
            */}
            <Route
              path="/contact"
              component={() => <Contact {...props} theme={props.theme} />}
            />
            <Route
              path="/splash"
              component={() => <Splash {...props} theme={props.theme} />}
            />
            <Route
              path="/projects"
              component={() => <Projects {...props} theme={props.theme} />}
            />
            <Route
              path="*"
              component={() => <Error404 {...props} theme={props.theme} />}
            />
          </Switch>
        </HashRouter>
      </>
    );
  } else {
    return (
      <div className={styles["default-width"]}>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Home {...props} theme={props.theme} />}
            />
            <Route
              path="/home"
              component={() => <Home {...props} theme={props.theme} />}
            />
            <Route
              path="/experience"
              exact
              component={() => <Experience {...props} theme={props.theme} />}
            />
            <Route
              path="/education"
              component={() => <Education {...props} theme={props.theme} />}
            />
            {/*
            <Route
              path="/opensource"
              component={() => <Opensource {...props} theme={props.theme} />}
            />
            */}
            <Route
              path="/contact"
              component={() => <Contact {...props} theme={props.theme} />}
            />
            <Route
              path="/projects"
              component={() => <Projects {...props} theme={props.theme} />}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
};

export default Main;
