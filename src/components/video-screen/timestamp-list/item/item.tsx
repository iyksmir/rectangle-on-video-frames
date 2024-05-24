import React, { MouseEvent, useState } from 'react';

import { convertTimeStampToMSS } from "../../../../utils/convert-timestamp";

import { IAnalyticEvent } from "../../../../types/interfaces";

import style from './style.module.css';

type Props = Pick<IAnalyticEvent, 'timestamp'> & {
  onClickHandler: (e: MouseEvent<HTMLButtonElement>) => void,
}

function Item({ timestamp, onClickHandler }: Props) {
  const [humanTimeFormat, setHumanTimeFormat] = useState(convertTimeStampToMSS(timestamp));

  return (
    <li className={style.item}>
      <button onClick={onClickHandler} className={style.button}>
        {humanTimeFormat}
      </button>
    </li>
  );
}

export default Item;
