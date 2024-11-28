import React from "react";
import styles from './BannerVideo.module.scss'

const BannerVideo = () => {
  return (
    <div className={styles.BannerVidoeContainer}>
        <div className={styles.VideoOverLay}/>
        <div className={styles.LetterBoxBottom}/>
        <h1>NBA Stats</h1>
      <iframe
        src="https://www.youtube.com/embed/WqKb8Jk6vHc?controls=0&autoplay=1&mute=1&disablekb=1&fs=0&loop=1&modestbranding=1"
        frameBorder="0"
        title="Intro Video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default BannerVideo;
