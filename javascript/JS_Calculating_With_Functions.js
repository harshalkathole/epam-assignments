function zero(func) {
	return generateResult(0,func);
}
function one(func) {
	return generateResult(1,func);
}
function two(func) {
	return generateResult(2,func);
}
function three(func) {
	return generateResult(3,func);
}
function four(func) {
	return generateResult(4,func);
}
function five(func) {
	return generateResult(5,func);
}
function six(func) {
	return generateResult(6,func);
}
function seven(func) {
	return generateResult(7,func);
}
function eight(func) {
	return generateResult(8,func);
}
function nine(func) {
	return generateResult(9,func);
}

function plus(right) {
  return function(left) {
    return left + right; 
  };
}
function minus(right) {
  return function(left) {
		return left - right;
	};
}
function times(right) {
  return function(left) {
      return left * right; 
  };
}
function dividedBy(right) {
  return function(left) { 
      return parseInt(left / right); 
  };
}

function generateResult(num, func) {
  if (func === undefined) {
		return num;
	} else {
		return func(num);
	}
}