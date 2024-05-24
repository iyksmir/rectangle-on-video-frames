import React, { MouseEvent } from 'react';

import Item from "./item/item";

import analyticsEventsData from '../../../data/analytics-events';

import style from './style.module.css';

type Props = {
  videoRef: React.RefObject<HTMLVideoElement>,
}

function TimestampList({ videoRef }: Props) {
  function setNewCurrentTime(e: MouseEvent<HTMLButtonElement>, timestamp: number) {
    if (videoRef.current) {
      const videoElem = videoRef.current;
      videoElem.currentTime = timestamp;
    }
  }

  return (
    <ul className={style.list}>
      {analyticsEventsData.map((data) =>
        <Item
          key={data.timestamp}
          timestamp={data.timestamp}
          onClickHandler={(e: MouseEvent<HTMLButtonElement>) => setNewCurrentTime(e, data.timestamp)}
        />
      )}
    </ul>
  );
}

export default React.memo(TimestampList);
