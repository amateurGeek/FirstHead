var tick = true;

function ticker() {
  if (tick) {
  console.log("tik");
  tick = false;
} else {
  console.log("tok");
  tick = true;
}
}
setInterval(ticker, 1000);
