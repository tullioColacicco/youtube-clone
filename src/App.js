import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./SearchBar";
import VideoDetail from ".//VideoDetail";
import VideoList from "./VideoList";

import youtube from "./api/youtube";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  useEffect(() => {
    HandleOnFormSubmit("pokemon");
  }, []);
  async function HandleOnFormSubmit(value) {
    // setSearchValue(value);
    try {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyAGqrlz5A_BjX2NMQLQOCR0ZMMWEwFP6jQ",
          q: value
        }
      });
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  }
  function onVideoSelect(video) {
    setSelectedVideo(video);
  }
  console.log(videos);
  return (
    <body style={{ backgroundColor: "gray" }}>
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar HandleOnFormSubmit={HandleOnFormSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail selectedVideo={selectedVideo} />
            </Grid>

            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </body>
  );
}

export default App;
