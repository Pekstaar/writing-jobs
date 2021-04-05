import "./App.css";
import Feed from "./components/Feed/Feed";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/SideProfile/SideProfile";
import Tasks from "./components/Tasks/SideTasks/SideTasks";

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="bdy">
        <Profile />

        <Feed />

        <Tasks />
      </div>
    </div>
  );
}

export default App;
