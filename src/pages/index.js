import React, { useState, useEffect } from 'react';
import moment from 'moment';
import style from './index.less';

const getTime = () => moment().format('YYYY-MM-DD HH:mm:ss');

export default () => {
  const [time, setTime] = useState(getTime());
  useEffect(() => {
    setTimeout(() => {
      setTime(getTime());
    }, 1000);
  });
  return (
    <>
      <div className={style.page}>
        <span>{time}</span>
      </div>
    </>
  );
};
