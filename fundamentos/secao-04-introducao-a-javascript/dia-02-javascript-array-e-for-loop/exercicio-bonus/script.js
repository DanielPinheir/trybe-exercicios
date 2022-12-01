//ordem crescente
//burble
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let twoIndex = 0; twoIndex < index; twoIndex += 1) {
    if (numbers[index] < numbers[twoIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[twoIndex];
      numbers[twoIndex] = position;
    }
  }
}

console.log(numbers);

//ordem decrescente

for (let index = 1; index < numbers.length; index += 1) {
  for (let twoIndex = 0; twoIndex < index; twoIndex += 1) {
    if (numbers[index] > numbers[twoIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[twoIndex];
      numbers[twoIndex] = position;
    }
  }
}

console.log(numbers);
