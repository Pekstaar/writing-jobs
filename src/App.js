import "./App.css";
import Feed from "./components/Feed/Feed";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="body">
        <Profile />

        <Feed />

        <Tasks />
      </div>
    </div>
  );
}

export default App;
