import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KeyGen from "./components/KeyGeneration/KeyGen";
import Upload from "./components/Upload/Upload";
import { Download } from "./components/Download/Download";
import All from "./components/All/All";
import ReactDOM from "react-dom";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { Logout } from "./components/Logout/Logout";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/logout" exact element={<Logout />} />
          <Route path="/all" exact element={<All />} />
          <Route path="/keygen" exact element={<KeyGen />} />
          <Route path="/upload" exact element={<Upload />} />
          <Route path="/download" exact element={<Download />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
