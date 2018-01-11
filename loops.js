/*
FOR syntax: 
Use FOR when you know how many times you want the loop to run.
for ([initialization]; [condition]; [iteration]) {
  [loopBody]
}
*/
jarray = [];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function forLoop(jarray) {
    for (let i = 0; i < 25; i++) {
    if (i === 1) {
      // add "I am 1 strange loop." to the array.
      jarray.push('I am 1 strange loop.');
    } else {
      jarray.push('I am ${i} strange loops.'); 
      // add "I am ${i} strange loops."
    }
  }
  console.log(jarray);
  return jarray;
}
forLoop();
