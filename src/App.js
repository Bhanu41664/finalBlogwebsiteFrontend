import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Top bar/Topbar";
import Home from "./Pages/Home/Home";
import Single from "./Components/single/Single";
import Write from "./Pages/Write/Write";
import Setting from "./Pages/Setting/Setting";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import {
  BrowserRouter as Router,
  
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user}=useContext(Context)
  return (
    <Router>
      <Topbar></Topbar>
      <Routes>
      <Route exact path="/"
            element={<Home/>}
          />
          <Route exact path="/register"
            element={user ? <Home/>:<Register/>}
          />
          <Route exact path="/login"
            element={user ? <Home/>: <Login/>}
          />
           <Route exact path="/write"
            element={user ? <Write/>:<Register />}
          />
          <Route exact path="/settings"
            element={user ?<Setting/>:<Register/>}
          />
          <Route exact path="/post/:postId"
            element={<Single/>}
          />
      </Routes>
      
     
      
    </Router>
  );
}

export default App;
