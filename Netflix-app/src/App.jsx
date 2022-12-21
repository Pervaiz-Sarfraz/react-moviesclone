import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import SearchBox from "./components/SearchBox";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Account from "./pages/Account";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
