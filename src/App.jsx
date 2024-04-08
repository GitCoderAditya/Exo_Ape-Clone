import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import PlayReel from "./components/PlayReel";
import Images from "./components/Images";
import Spread from "./components/Spread";
import LocomotiveScroll from "locomotive-scroll";
import Ours from "./components/Ours";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className=' w-full font-["TWK Lausanne 300  "] '>
        <Navbar />
        <Landing />
        <Work />
        <PlayReel />
        <Images />
        <Spread />
        <Ours/>
      </div>
    </>
  );
}

export default App;
