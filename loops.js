/*
FOR syntax: 
Use FOR when you know how many times you want the loop to run.
for ([initialization]; [condition]; [iteration]) {
  [loopBody]
}
*/
jarray = [];

function forLoop(jarray) {
    for (let i = 0; i < 25; i++) {
    if (i === 1) {
      jarray[i] = 'I am 1 strange loop.';
    } else {
      jarray[i] = 'I am ${i} strange loops.';

    }
  }
  return jarray;
}




/* trying crap
function forLoop(jarray) {
    for (let i = 0; i < 25; i++) {
    if (i === 1) {
      jarray.push('I am 1 strange loop.');

    } else {
      jarray[i] = 'I am ${i} strange loops.';
      jarray.push('I am ${i} strange loops.'); 

    }
  }
  return jarray;
}
*/





