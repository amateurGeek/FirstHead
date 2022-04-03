function clunk(iteration) {
  var num = iteration;
  while (num > 0) {
    display("clunk");
    num = num - 1;
  }
}

function thingamajic(size) {
  var facky = 1;
  clunkCounter = 0;
  if (size == 0) {
    dislay("clank");
  } else if (size == 1) {
    display("thunk");
  } else {
    while (size > 1) {
      facky = facky * size;
      size = size - 1;
    }
    clunk(facky);
  }
}

function display(output){
console.log(output);
clunkCounter=clunkCounter+1;
}
var clunkCounter=0;
thingamajic(4);
console.log(clunkCounter);
