import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import NewVendor from "./components/NewVendor";
import VendorList from "./components/VendorList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/newvendor" element={<NewVendor />} />
        <Route path="/vendorlist" element={<VendorList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
