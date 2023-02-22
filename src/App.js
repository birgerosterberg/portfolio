import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Bios from "./components/Bios";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/bios" exact element={<Bios />} />
          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
