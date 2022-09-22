//crescente

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let i = 1; i < numbers.length; i += 1) {
  for (let i2 = 0; i2 < i; i2 += 1) {
    if (numbers[i] < numbers[i2]) {
      let posicao = numbers[i];
      numbers[i] = numbers[i2];
      numbers[i2] = posicao;      
    }   
  }
}
console.log(numbers);

// decrescente

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let i = 1; i < numbers2.length; i += 1) {
  for (let i2 = 0; i2 < i; i2 += 1) {
    if (numbers2[i] > numbers2[i2]) {
      let posicao = numbers2[i];
      numbers2[i] = numbers2[i2];
      numbers2[i2] = posicao;      
    }   
  }
}
console.log(numbers2);

//AAAAAAAAAAAAAAAAAAAAAAAAAAAAA não sabia onde por o console.log hehehe