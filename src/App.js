import { Route, Router, Switch } from "react-router";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
