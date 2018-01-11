
jarray = [];

function forLoop(jarray) {
    for (let i = 0; i < 25; i++) {
    if (i === 1) {
      jarray.push('I am 1 strange loop.');
    } else {
      jarray.push('I am ${i} strange loops.'); 
    }
  }
  return jarray;
}

/* why doesn't this work?

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
*/



/* Reference parking lot 
FOR: Use when you know how many times you want the loop to run.

for ([initialization]; [condition]; [iteration]) {
  [loopBody]
}

WHILE: Use when we don't know how many times the loop needs to reun because it depends on a function/return value.

while ([condition]) {
  [loopBody]
}


*/
