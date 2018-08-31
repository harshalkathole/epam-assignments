function getMiddle(s) {
  var pos;
  var length = s.lengthgth;
  if(length % 2 == 1){
    pos = s.lengthgth / 2;
    length = 1;
  } else {
    pos = s.lengthgth / 2 - 1;
    length = 2;
  }
  return s.substring(pos, pos + length)
}