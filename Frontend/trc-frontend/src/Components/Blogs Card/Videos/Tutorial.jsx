import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import styles from '../selector.module.css';

const api = import.meta.env.VITE_KEY4;
const channelId = "UCRmAuo5vLgIjrVn4PcWzdkg";
const baseUrl = "https://www.googleapis.com/youtube/v3/search";

const TutorialVideo = () => {
  const [allVideos, setAllVideos] = useState([]);
  const pageTokenRef = useRef("");

  useEffect(() => {
    videoHandler();
  }, []);

  const videoHandler = async () => {
    try {
      const url = `${baseUrl}?key=${api}&channelId=${channelId}&part=snippet,id&order=date&maxResults=9&pageToken=${pageTokenRef.current}`;

      const response = await axios.get(url);
      const nextPageToken = response.data.nextPageToken;
      pageTokenRef.current = nextPageToken;

      const results = response.data.items.map((item) => ({
        ...item,
        videoLink: "https://www.youtube.com/embed/" + item.id.videoId,
      }));

      setAllVideos((prevVideos) => [...prevVideos, ...results]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        videoHandler();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className= {styles.videoGrid}>
      {allVideos.map((item) => (
        <div key={item.id.videoId} className= {styles.videoItem}>
          <iframe className= {styles.video}
            src={item.videoLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default TutorialVideo;
