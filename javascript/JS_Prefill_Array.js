function prefill(n, v) {
	  var size = parseFloat(n);
	  var e = {name:"TypeError", message: n+" is invalid"};
	  if (!isNaN(size) && size % 1 === 0 && size >= 0) {
	  var array = [];
	      for (var i=0; i<n; i++) {
	      array[i] = v;
	    }
	    return array; 
	  } else {
	      throw e;
	  }
  }