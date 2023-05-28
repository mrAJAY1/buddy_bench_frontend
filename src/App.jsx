import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage, LoginPage, SignupPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
