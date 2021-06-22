let arr = [];

for (let i = 1; i <= 25; i++) {
  arr.push(i);
}

console.log(`${`Array values:`.padEnd(30)} ${arr.join(" ")}`);

let arrDividedBy2 = [];

for (let i = 0, len = arr.length; i < len; i++) {
  arrDividedBy2.push(arr[i] / 2);
}

console.log(`${`Array values divided by 2:`.padEnd(30)} ${arrDividedBy2.join(" ")}`);