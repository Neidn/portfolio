import React from "react";
import { Fade } from "react-reveal";
import { Link, NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import styles from "./Header.module.css";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const Header = (props) => {
  const theme = props.theme;
  const link = settings.isSplash ? "/splash" : "home";
  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <>
        <header className={styles["header"]}>
          <NavLink to={link} tag={Link} className={styles["logo"]}>
            <span style={{ color: theme.text }}> &lt;</span>
            <span className={styles["logo-name"]} style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>
          <input className={styles["menu-btn"]} type="checkbox" id="menu-btn" />
          <label className={styles["menu-icon"]} htmlFor="menu-btn">
            <span
              className={styles["navicon"]}
              style={{
                "--bg": theme.secondaryText,
              }}
            ></span>
          </label>
          <ul
            className={styles["menu"]}
            style={{ backgroundColor: theme.body }}
          >
            <li>
              <NavLink
                to="/home"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Projects
              </NavLink>
            </li>
            {/*
            <li>
              <NavLink
                to="/opensource"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Open Source
              </NavLink>
            </li>
            */}
            <li>
              <NavLink
                to="/contact"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </header>
      </>
    </Fade>
  );
};

export default Header;
