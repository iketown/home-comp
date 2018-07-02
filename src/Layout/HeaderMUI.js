import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  white: {
    color: "white"
  }
};

const HomeStyle = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.35417em;
`;
const CompStyle = styled.span`
  font-size: 1.5rem;
  font-weight: 100;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.35417em;
`;

export class Header extends Component {
  render() {
    const { user, classes, logOut } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={classes.flex}
          >
            <Button color="inherit" className={classes.white}>
              <div>
                <HomeStyle>HOME</HomeStyle>
                <CompStyle>COMP</CompStyle>
              </div>
            </Button>
          </Link>
          {user ? (
            <Fragment>
              <Button color="inherit">{user.email}</Button>
              <Button color="inherit" onClick={logOut}>
                Sign Out
              </Button>
            </Fragment>
          ) : (
            <Button color="inherit">Sign In</Button>
          )}
        </Toolbar>
      </AppBar>
      //   <Fragment>
      //     <h3>HomeComp</h3>
      //     <div className="links">
      //       <h2>
      //         <Link to="/preferences">Preferences</Link>
      //       </h2>
      //       {/* <a href="">Sign In</a> */}
      //       <a href="">ike76@me.com</a>
      //     </div>
      //   </Fragment>
    );
  }
}

export default withStyles(styles)(Header);