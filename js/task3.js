{
  const speed = 50 / 60; //speed per minut
  let minutes = +prompt(
    'How long do you have to ride? write in minutes'
  );
  if (isNaN(minutes)) {
    do {
      hourse = +prompt('Error, try again \nwrite in minutes: ');
    } while (isNaN(minutes));
  }
  const result = (speed * minutes).toFixed(2);
  alert(`${result} km left`);
}
