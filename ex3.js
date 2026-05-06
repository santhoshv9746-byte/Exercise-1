// Sum of numbers in l that are multiples of a OR b
let listEuler1 = (a, b, l) => {
  let sum = 0;

  for (let x of l) {
    if (x % a === 0 || x % b === 0) {
      sum += x;
    }
  }

  return sum;
};

// Sum of numbers in l that are multiples of ANY value in list a
let listEuler2 = (a, l) => {
  let sum = 0;

  for (let x of l) {
    for (let m of a) {
      if (x % m === 0) {
        sum += x;
        break; // avoid double counting
      }
    }
  }

  return sum;
};

// Same as listEuler2 (more functional style)
let listEuler3 = (a, l) => {
  return l
    .filter(x => a.some(m => x % m === 0))
    .reduce((acc, val) => acc + val, 0);
};

// ---- CALLING FUNCTIONS ----

let eulerlist = () => {
  let a = 2;
  let b = 3;
  let l = [1,2,3,4,5,6,7,9,10,10,10];

  let result = listEuler1(a, b, l);
  alert("Sum (a or b): " + result);
};

let euler2Lists = () => {
  let a = [2,3];
  let l = [1,2,3,4,5,6,7,9,10,10,10];

  let result = listEuler2(a, l);
  alert("Sum (list a): " + result);
};

let euler2Lists1 = () => {
  let a = [2,3,5];
  let l = [1,2,3,4,5,6,7,9,10,10,10];

  let result = listEuler3(a, l);
  alert("Sum (functional): " + result);
};
