function pow(x, y) {

  if (y === 0) { 
    return x === 0 ? undefined : 1;
  }

  if (x === 0) {
    return y > 0 ? 0 : undefined;
  }

  if (y === 1) {
    return x;
  }

  if (x === 1) {
    return 1;
  }

  let Negative = false;

  if (y < 0) {
    Negative = true;
    y = -y;
  }

  let result = 1;

  for (let i = 1; i <= y; i++) {
    for (let j = 1; j <= 1; j++) {
      result = result * x;
    }
  }

  if (Negative) {
    return 1 / result;
  }

  return result;
}

//Наприклад
const final = pow(2, 2);
console.log(final); //4