let n = 11;

for (let i = 1; i <= n; i += 2) {
  let line = '';
  for (let s = 0; s < Math.ceil((n - i) / 2); s++) {
    line += ' ';
  }
  for (let c = 0; c < i; c++) {
    line += '*';
  }
  console.log(line);
}

// for (let i = 1; i <= n; i += 2) {
//   console.log('*'.repeat(i).padStart(Math.ceil((n - i) / 2) + i, ' '));
// }