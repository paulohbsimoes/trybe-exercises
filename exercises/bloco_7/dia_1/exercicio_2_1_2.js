const fat = (num) => num <= 1 ? num : fat(num - 1) * num;

for(let i = 0; i < 6; i++) {
  console.log(i, fat(i));
}
