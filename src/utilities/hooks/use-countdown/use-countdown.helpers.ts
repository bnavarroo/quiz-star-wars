const fmtTimeValue = (value: number): string =>
  value < 10 ? `0${value}` : `${value}`;

const fmtTimeLeft = (timeLeft: number): string => {
  const minutes = Math.floor(timeLeft / 60);
  const restSeconds = timeLeft - minutes * 60;

  return `${fmtTimeValue(minutes)}:${fmtTimeValue(restSeconds)}`;
};

export default fmtTimeLeft;
