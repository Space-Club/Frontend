function getTimeStamp(time: string) {
  const timeArray = time.split(':');
  const [hours, minutes] = [Number(timeArray[0]), Number(timeArray[1])];
  return minutes ? `${hours}시 ${minutes}분` : `${hours}시`;
}

export { getTimeStamp };
