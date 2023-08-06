import { useState, useEffect } from "react";
import styles from "./Splash.module.css";

import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

const AnimatedSplash = (props) => {
  return (
    <div className={styles["logo_wrapper"]}>
      <div className={styles["screen"]} style={{ backgroundColor: props.theme.splashBg }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
};

const Splash = (props) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setRedirect(true), 5500);
    return () => clearTimeout(id);
  });

  return redirect ? (
    <Redirect to="/home" />
  ) : (
    <AnimatedSplash theme={props.theme} />
  );
};

export default Splash;
