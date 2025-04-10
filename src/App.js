import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./Route/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //로그인 상태 state
  const [auth, setAuth] = useState(false);

  return (
    <div>
      <Navbar auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login auth={auth} setAuth={setAuth} />}
        />
        <Route path="/product/:id" element={<PrivateRoute auth={auth} />} />
      </Routes>
    </div>
  );
}

export default App;
