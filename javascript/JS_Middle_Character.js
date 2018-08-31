function getMiddle(s) {
  var middlePosition;
  var length;

  if(s.length % 2 == 1) {
      middlePosition = s.length / 2;
      length = 1;
  } else {
      middlePosition = s.length / 2 - 1;
      length = 2;
  }
  
  return s.substring(middlePosition, middlePosition + length)
}