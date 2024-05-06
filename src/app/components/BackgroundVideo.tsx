"use client";
import React from "react";

const BackgroundVideo = (props: { videoSource: string | undefined; }) : JSX.Element=> {

  return (
    <div >
        <video autoPlay loop muted className = "video">
            <source src = {props.videoSource} type = "video/mp4"/>
            Your browser does not support this video tag
        </video>
    </div>
  );
};

export default BackgroundVideo;