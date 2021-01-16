import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import moment from 'moment';

export interface TimeProps {
  time: Date;
}

export const Time = (props: TimeProps) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      if (now.getSeconds() !== currentTime.getSeconds()) {
        setCurrentTime(now);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [currentTime]);

  return (
    <>
      <Typography>{moment(currentTime).format('hh:mm:ss')}</Typography>
      <Typography>{moment(props.time).format('hh:mm:ss')}</Typography>
    </>
  );
};
