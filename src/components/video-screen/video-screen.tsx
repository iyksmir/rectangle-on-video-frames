import React, { useRef, useState } from 'react';

import VideoPlayer from "./video-player/video-player";
import TimestampList from "./timestamp-list/timestamp-list";
import Rectangle from "../rectangle/rectangle";

import { IAnalyticEvent } from "../../types/interfaces";

import style from "./style.module.css";

function VideoScreen() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [elemCol, setElemCol] = useState<IAnalyticEvent[]>([]);

  return (
    <div className={style.container}>
      <div className={style.videoContainer}>
        <VideoPlayer videoRef={videoRef} setElemCol={setElemCol} />
        {elemCol.map((item) => <Rectangle key={item.timestamp} zone={item.zone} />)}
      </div>
      <div className={style.timestampContainer}>
        <TimestampList videoRef={videoRef} />
      </div>
    </div>
  );
}

export default VideoScreen;
