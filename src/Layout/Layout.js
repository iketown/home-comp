import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import HomeLister from "../HomeLister";
import ControlHouse from "../ControlHouse";
import RegistrationFormContainer from "../Forms/RegistrationFormContainer";
import SignInFormContainer from "../Forms/SignInFormContainer";
import AttributeManager from "../AttributeManager";
import { logOut } from "../actions/authActions";
import "./Layout.css";
import BackgroundImage from "../Images/paper.png";
import Watercolor from "../Images/watercolorbg.jpg";
import cityScene from "../Images/cityscene.jpg";
import HeaderMUI from "./HeaderMUI";
const StyleLinks = styled.div`
  font-size: small;
`;
const Dot = styled.span`
  color: #ffffff75;
`;
const Background = styled.div`
  background-image: url(${cityScene});
  background-size: cover;
  position: "fixed";
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -10;
  opacity: 0.2;
`;
const BGGrassDiv = styled.div`
  background: blue;
  background-image: url(${cityScene});
  position: absolute;
  bottom: 0;
  z-index: -2;
  width: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  opacity: 0.2;
`;

class Layout extends Component {
  logout = () => {
    this.props.dispatch(logOut());
  };
  render() {
    const { user } = this.props;
    return (
      <Router>
        <div className="layout">
          <header className="header">
            <HeaderMUI user={user} logOut={this.logout} />
          </header>

          <main className="main">
            <Switch>
              <Route path="/compare" component={HomeLister} />
              <Route path="/attributes" component={AttributeManager} />
              <Route path="/signup" component={RegistrationFormContainer} />
              <Route exact path="/signin" component={SignInFormContainer} />
              <Route exact path="/" component={SignInFormContainer} />
              <Route component={() => <div>no match</div>} />
            </Switch>
          </main>

          <section className="footer" />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user
});
export default connect(mapStateToProps)(Layout);
