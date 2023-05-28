import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SelectSeats from "./pages/SelectSeats";
import CitySelections from "./pages/CitySelections";
import Cart from "./pages/Cart";
import Header from "./components/Header";

function App() {
  return (
    <div className=" w-[100vw] h-full">
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/selectseats" element={<SelectSeats />} />
        <Route path="/cityselection" element={<CitySelections />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
