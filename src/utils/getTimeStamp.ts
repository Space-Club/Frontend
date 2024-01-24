function getTimeStamp(time: string | null | undefined) {
  if (!time) {
    return '';
  }
  const timeArray = time.split(':');
  const [hours, minutes] = [Number(timeArray[0]), Number(timeArray[1])];
  return minutes ? `${hours}시 ${minutes}분` : `${hours}시`;
}

function getDateStamp(date: string) {
  return date.replaceAll('-', '/');
}

export { getTimeStamp, getDateStamp };
