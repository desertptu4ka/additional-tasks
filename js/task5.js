{
  let total = 0;
  let answer;
  do {
    answer = prompt(`Total = ${total}\nEnter any number: `);
    if (!isNaN(+answer) && answer) {
      total += +answer;
    }
  } while (answer);

  alert(`-=-=-=- END -=-=-=-\n Total = ${total}`);
}
