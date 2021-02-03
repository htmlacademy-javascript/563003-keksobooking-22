const getRandomInt = function (min, max) {
  if(min >= max) {
    throw new Error
  }
  return Math.floor(Math.random() * (max - min) + min);
}
getRandomInt();


const getRandomInterger = function (min, max, number) {
  if(min >= max) {
    throw new Error
  }
  const sumRandom = Math.random() * (max - min) + min;
  const sumGood =  sumRandom.toFixed(number);
  return Number(sumGood);
}
getRandomInterger();

