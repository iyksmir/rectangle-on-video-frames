import React, { SyntheticEvent } from 'react';

import { IAnalyticEvent } from "../../../types/interfaces";

import style from './style.module.css';

const VIDEO_HREF = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

type Props = {
  videoRef: React.RefObject<HTMLVideoElement>,
  analyticsEventsData: null | IAnalyticEvent[],
  setRectangleCol: React.Dispatch<React.SetStateAction<IAnalyticEvent[]>>,
}

function VideoPlayer({ videoRef, analyticsEventsData, setRectangleCol }: Props) {
  function onTimeUpdateHandler(e: SyntheticEvent<HTMLVideoElement, Event>) {
    if (analyticsEventsData) {
      const { currentTime } = e.currentTarget;
      const rectanglesInScreenCol = analyticsEventsData
        .filter((data) => data.timestamp < currentTime && currentTime < data.timestamp + data.duration);
      setRectangleCol(rectanglesInScreenCol);
    }
  }

  return (
    <video
      ref={videoRef}
      className={style.videoPlayer}
      src={VIDEO_HREF}
      controls
      onTimeUpdate={onTimeUpdateHandler}
    />
  );
}

export default VideoPlayer;
