const fat = (num) => {
  if (num < 0) throw new Error("Somente número positivos");
  let sum = num === 0 ? 0 : 1;
  for (let factor = sum + 1; factor <= num; factor += 1) {
    sum *= factor;
  }
  return sum;
}

for(let i = 0; i < 6; i++) {
  console.log(i, fat(i));
}
