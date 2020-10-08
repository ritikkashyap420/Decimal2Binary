

"use strict";
function myFunction() {
  var number=parseInt(document.getElementById("input").value);
  console.log(number);
  var result = number.toString(2);
  console.log(result);
  document.getElementById("answer").value=result;
}

document.getElementById("calculate").addEventListener("click", myFunction);
