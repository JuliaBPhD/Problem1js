var problem1 = 0;

for (var i = 0; i <= 1000; i++) {
  if ((i % 3) === 0 || (i % 5) === 0) {
    problem1 = problem1 + i;
  }
}

console.log('Sum: ' + problem1);

