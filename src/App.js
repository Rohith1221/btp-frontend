import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KeyGen from "./components/KeyGeneration/KeyGen";
import Upload from "./components/Upload/Upload";
import { Download } from "./components/Download/Download";
import All from "./components/All/All";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
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
