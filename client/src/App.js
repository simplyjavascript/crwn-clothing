import React, { Component, useEffect, lazy, Suspense } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";

import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
//import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";
import { GlobalStyle } from "./global.styles";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading..</div>}>
            <Route exact path="/" component={HomePage} />
          </Suspense>
        </ErrorBoundary>
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signIn"
          render={() => {
            return this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInAndSignUp />
            );
          }}
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// this case, we are not passing any params to dispatch fn.
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, { checkUserSession })(App);
