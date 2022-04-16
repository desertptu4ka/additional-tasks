{
  let radius = +prompt('write in radius: ');
  if (isNaN(radius)) {
    do {
      radius = +prompt('Error, try again \nwrite in radius: ');
    } while (isNaN(radius));
  }
  const result = (Math.PI * radius * 2).toFixed(2);
  alert(`area of circle is ${result} m2`);
}
