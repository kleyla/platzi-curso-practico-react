import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Checkout } from "../pages/Checkout";
import { CreateAccount } from "../pages/CreateAccount";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { MyAccount } from "../pages/MyAccount";
import { NewPassword } from "../pages/NewPassword";
import { NotFound } from "../pages/NotFound";
import { Orders } from "../pages/Orders";
import { PasswordRecovery } from "../pages/PasswordRecovery";
import { SendEmail } from "../pages/SendEmail";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/password-recovery" component={PasswordRecovery} />
        <Route exact path="/send-email" component={SendEmail} />
        <Route exact path="/new-password" component={NewPassword} />
        <Route exact path="/account" component={MyAccount} />
        <Route exact path="/signup" component={CreateAccount} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/orders" component={Orders} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
