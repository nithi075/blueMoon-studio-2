import React, { useState } from "react";
import { motion } from "framer-motion";
import "./bts.css";

import Bts1 from "../../assets/hero.mp4";
import Bts2 from "../../assets/bts2.mp4";
import Bts3 from "../../assets/bts3.mp4";

const btsVideos = [
  { id: 1, src: Bts1, title: "Fashion Setup" },
  { id: 2, src: Bts2, title: "Studio Lighting" },
  { id: 3, src: Bts3, title: "Creative Process" }
];

const BTS = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="bts-section" id="bts">
      <div className="bts-container">

        <span className="section-subtitle">
          BEHIND THE SCENES
        </span>

        <h2 className="section-title">
          The Process Behind <br />
          <span className="text-highlight">The Magic</span>
        </h2>

        <p className="bts-description">
          Every cinematic frame begins with creativity,
          collaboration, and attention to detail.
        </p>

        <div className="bts-gallery">
          {btsVideos.map((video) => (
            <motion.div
              key={video.id}
              className="bts-video-wrapper"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedVideo(video.src)}
            >
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
              />
            </motion.div>
          ))}
        </div>

        {/* FULLSCREEN OVERLAY */}
        {selectedVideo && (
          <div
            className="video-modal"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="video-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedVideo(null)}
              >
                ✕
              </button>

              <video
                src={selectedVideo}
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default BTS;