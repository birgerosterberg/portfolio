import React from "react";
import HeaderB from "./HeaderB";
import MainB from "./MainB";
import FooterB from "./FooterB";


function Bios() {
  return (
    <>
    <div className="flex flex-col justify-between bg-gray-300 min-h-screen">
        <div>
            <HeaderB/>
        </div>
        <div className="mb-auto">
            <MainB/> // Make dynamic path
        </div>
        <div>
            <FooterB/>
        </div>
    </div>
    </>
  );
}

export default Bios;
