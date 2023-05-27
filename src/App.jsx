import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SelectSeats from "./pages/SelectSeats";
import CitySelections from "./pages/CitySelections";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Header from "./components/Header";
import HOC from "./components/HOC";

function App() {
  return (
    <div>
      <div className=' flex justify-center items-center bg-slate-200'>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selectseats" element={<SelectSeats />} />
        <Route path="/cityselection" element={<CitySelections />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
