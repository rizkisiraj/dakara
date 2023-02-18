import MyVideo from "../assets/video.mp4";
import React, { useState } from "react";

function Video(){
    const [muted, setMuted] = useState(false); 
    return (
      <div className=" h-screen">
      <video className=" h-screen w-screen object-cover object-center" muted={muted} onClick={() => setMuted(!muted)} autoPlay loop>
        <source src={MyVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      </div>
    );
  
}

export default Video