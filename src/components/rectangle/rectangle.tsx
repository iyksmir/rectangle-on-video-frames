import React from 'react';

import { IAnalyticEvent } from "../../types/interfaces";

import style from './style.module.css';

type Props = Pick<IAnalyticEvent, 'zone'>;

function Rectangle({ zone }: Props) {
  const { top, left, width, height } = zone;

  return (
    <div className={style.rectangle} style={{ top, left, width, height }} />
  );
}

export default Rectangle;
