import React, { useState } from "react";
import { motion } from "framer-motion";
import "./bts.css";

import Bts1 from "../../assets/hero.mp4";
import Bts2 from "../../assets/bts2.mp4";
import Bts3 from "../../assets/bts3.mp4";

const btsVideos = [
  { id: 1, src: Bts1, title: "Fashion Setup" },
  { id: 2, src: Bts2, title: "Studio Lighting" },
  { id: 3, src: Bts3, title: "Creative Process" },
];

const BTS = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="bts-section" id="bts">
      <div className="bts-container">
        <motion.span
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          BEHIND THE SCENES
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Behind Every <br />
          <span className="text-highlight">
            Great Story
          </span>
        </motion.h2>

        <motion.p
          className="bts-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          An inside look at the creative process
          that shapes compelling visual narratives.
        </motion.p>

        <div className="bts-gallery">
          {btsVideos.map((video) => (
            <motion.div
              key={video.id}
              className="bts-video-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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

        {/* VIDEO MODAL */}
        {selectedVideo && (
          <div className="video-modal">
            <div className="video-modal-content">
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