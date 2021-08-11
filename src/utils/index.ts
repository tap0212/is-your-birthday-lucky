import { Moment } from 'moment';
export const isBirthDayLucky = (dob: Moment, luckyNumber: number): boolean =>
  Number(dob.format('YYYYMMDD')) % luckyNumber === 0;
