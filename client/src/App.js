import "./App.css";
import LandingPage from "./pages/Landing-page";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Protected from "./components/Protected";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Protected Component={<LandingPage />} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
