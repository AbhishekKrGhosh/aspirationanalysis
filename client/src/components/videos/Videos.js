import React, { useState, useEffect } from "react";
import './style.css'

function Videos({dark}){
    const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    const Content = [
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",
      "https://www.youtube.com/watch?v=fM2MA2PTckM",

    ];
    setVideos(Content);
    setFilteredVideos(Content.slice(0, 12));
  }, []);

  const handleSearch = () => {
    const filtered = videos.filter((video) =>
      video.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVideos(filtered.slice(0, 12)); 
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="video" style={dark?{color:'white'}:{background:'white', color:'black'}}>
    <div className="video-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="video-rows">
        {filteredVideos.map((video, index) => (
          <div key={index} className="video-card">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${getVideoId(video)}`}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

const getVideoId = (url) => {
  return url.split("v=")[1];
};


export default Videos