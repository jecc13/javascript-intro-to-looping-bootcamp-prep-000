/*
FOR syntax: 
Use FOR when you know how many times you want the loop to run.
for ([initialization]; [condition]; [iteration]) {
  [loopBody]
}
*/

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      // add "I am 1 strange loop." to the array.
      array.push = "I am 1 strange loop.";
    } else {
      array.push = "I am ${i} strange loops."; 
      // add "I am ${i} strange loops."
    }
  }
  console.log(array);
  return array;
}
forLoop();
