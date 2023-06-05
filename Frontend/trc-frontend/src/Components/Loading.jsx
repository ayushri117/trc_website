import React from "react";
import "./Loading.css";
import loadingVideo from "../assets/loading.mp4";
import { useEffect } from "react";

const Loading = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="loading_container">
      <video
        src={loadingVideo}
        className="loading_video"
        autoPlay
        muted
      ></video>
    </div>
  );
};

export default Loading;
