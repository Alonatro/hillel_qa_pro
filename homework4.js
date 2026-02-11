function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    if (randomNumber % 2 === 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }

  let percentEven = (evenCount / count) * 100;
  let roundedEven = percentEven.toFixed(2);
  let roundedOdd = (100 - percentEven).toFixed(2);

  console.log(`Кількість згенерованих чисел: ${count}`);
  console.log(`Парних чисел: ${evenCount}`);
  console.log(`Не парних чисел: ${oddCount}`);
  console.log(`Відсоток парних до не парних: ${roundedEven}% / ${roundedOdd}%`);
}

checkProbabilityTheory(1000);
//Кількість згенерованих чисел: 1000
//Парних чисел: 495
//Не парних чисел: 505
//Відсоток парних до не парних: 49.50% / 50.50%