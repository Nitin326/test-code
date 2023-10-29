import "./App.css";
import BottomAppBar from "./components/BottomAppBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nopage from "./components/Nopage";
import Payment from "./components/Payment";
import UserProfile from "./components/UserProfile";
import Track from "./components/Track";
import ChartBoard from "./components/ChartBoard";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Signup";
import AddExpance from "./components/AddExpance";

function App() {
  return (
    <div>
      <BottomAppBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/dashboard" element={<ChartBoard />} />
          <Route exact path="/track" element={<Track />} />
          <Route exact path="/profile" element={<UserProfile />} />
          <Route exact path="/addexpance" element={<AddExpance />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
