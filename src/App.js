import React from "react";
import Timer from "./components/Timer";
import logo from "./images/logo1.png"
import TimedText from "./components/TimedText";

function App() {
  return (
    <>
    <div className="bg-black text-sm xl:text-lg xl:pl-10 xl:pt-10 2xl:text-2xl 2xl:pl-32 2xl:pt-32 text-gray-400 h-screen w-screen p-2">
      <img className ="pb-1 md:fixed md:right-0 lg:right-32 " src={logo} alt="logo"></img>
      <h1 className="text-xl lg:text-3xl font-bold text-white">Welcome to iamBiOS v1.0</h1>
      <h2 className="font-bold">WebDev Portfolio by Birger Österberg</h2>
      <br/>
      <h3 className="font-bold">Version 1.0</h3>
      <br/>

      <p className="font-bold">Webserver Running at 10GBit.</p>
      {/* Insert a timer to see how many seconds you been on the page */}
      {/* Insert a timer to see how many seconds you been on the page */}
      <p className="font-bold">Patience Test: <Timer /></p> 
      <br/>
      <p className="font-bold">A Look and Feel, iamBiOS Experience.</p>
      <p className="font-bold">Copyright (C) 1984-2023, iamBiOS.</p>
      <div className="pl-3 xl:pl-8">
        <TimedText time={3000} text={<p className="font-bold">Take a moment and relax your mind...</p>} />
        <TimedText time={6000} text={<p className="font-bold">Take a deep breath... Breathe out...</p>} />
        <TimedText time={12000} text={<p className="font-bold">Take a moment to feel this moment...</p>} />
        <TimedText time={16000} text={<p className="font-bold">Error: could not load this page yet.</p>} />
      </div>

      <div className="flex-wrap justify-center align-bottom absolute bottom-1 2xl:bottom-20">
        {/* Make sure that the key DEL will enter the page also. */}
        <p className="font-bold">Press DEL to <span className="text-2xl underline text-white 2xl:text-3xl hover:opacity-70">ENTER</span> the PAGE</p>
        {/* Add a line of todays time and date that was when you entered the page. */}
        <p className="font-bold">This page is soon ready.</p>
      </div>

    </div>
    </>
  );
}

export default App;
