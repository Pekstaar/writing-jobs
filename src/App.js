import { Route, Switch } from "react-router";
import "react-notifications/lib/notifications.css";
import Home from "./pages/Home/Home";
import "./App.css";

import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Welcome from "./pages/Welcome/Welcome";

import { NotificationContainer } from "react-notifications";
import { AuthProvider } from "./components/auth";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NotificationContainer />
        <Switch>
          <PrivateRoute path="/Dashboard" exact component={Home} />
          <PrivateRoute path="/Myprofile" exact component={Profile} />
          <PrivateRoute path="/Notifications" exact component={Notifications} />
          <Route path="/" exact component={Welcome} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Forgotpassword" component={ForgotPassword} />
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
