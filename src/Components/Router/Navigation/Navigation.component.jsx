import React, { Fragment } from "react";
import "./083 navigation.styles.scss";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../../Assets/083 crown.svg";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <Logo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signin">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
