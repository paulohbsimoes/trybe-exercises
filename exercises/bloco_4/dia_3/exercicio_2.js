let n = 5;

for (let i = 1; i <= n; i++) {
  let line = '';
  for (let c = 0; c < i; c++) {
    line += '*';
  }
  console.log(line);
}

// for (let i = 0; i < n; i++) {
//   console.log('*'.repeat(i + 1));
// }