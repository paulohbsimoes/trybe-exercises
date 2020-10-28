let n = 11;

for (let i = 1; i <= n; i += 2) {
  let line = '';
  for (let s = 0; s < Math.ceil((n - i) / 2); s++) {
    line += ' ';
  }
  for (let c = 0; c < i; c++) {
    if (c == 0 || c == i - 1 || i == n) {
      line += '*';
    } else {
      line += ' ';
    }
  }
  console.log(line);
}