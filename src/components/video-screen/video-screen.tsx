import React, { useEffect, useRef, useState } from 'react';

import VideoPlayer from "./video-player/video-player";
import TimestampList from "./timestamp-list/timestamp-list";
import Rectangle from "../rectangle/rectangle";

import { IAnalyticEvent } from "../../types/interfaces";

import style from "./style.module.css";

const MOCK_DATA_URL = 'https://run.mocky.io/v3/86ba5ad4-c45e-4f3d-9a07-83ce9a345833';

type TAnalyticsData = {
  pending: boolean,
  error: boolean,
  data: null | IAnalyticEvent[],
};

function VideoScreen() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [analyticsData, setAnalyticsData] = useState<TAnalyticsData>({ pending: false, error: false, data: null });
  const [rectangleCol, setRectangleCol] = useState<IAnalyticEvent[]>([]);

  useEffect(() => {
    setAnalyticsData((prevState) => ({ ...prevState, pending: true, error: false }));
    fetch(MOCK_DATA_URL)
      .then((res) => res.json())
      .then((mockData: IAnalyticEvent[]) => {
        console.log('Данные успешно загрузились!');
        mockData.sort((a, b) => a.timestamp - b.timestamp);
        setAnalyticsData((prevState) => ({ ...prevState, data: mockData }))
      })
      .catch((e) => {
        console.log('Данные не загрузились!')
        setAnalyticsData((prevState) => ({ ...prevState, error: true }))
      })
      .finally(() => setAnalyticsData((prevState) => ({ ...prevState, pending: false })));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.videoContainer}>
        <VideoPlayer videoRef={videoRef} analyticsEventsData={analyticsData.data} setRectangleCol={setRectangleCol} />
        {rectangleCol.map((item) => <Rectangle key={item.timestamp} zone={item.zone} />)}
      </div>
      <div className={style.timestampContainer}>
        <TimestampList videoRef={videoRef} analyticsEventsData={analyticsData.data} />
      </div>
    </div>
  );
}

export default VideoScreen;
