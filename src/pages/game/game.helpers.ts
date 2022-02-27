/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction } from 'react';

export const finishTime =
  (setHasTime: Dispatch<SetStateAction<boolean>>) => (): void => {
    setHasTime(false);
  };

export const updatePoints =
  (points: number, setPoints: Dispatch<SetStateAction<number>>) => (currentPoints: number): void => {
    setPoints(points + currentPoints);
  };
