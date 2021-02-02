const getRandomValue = function (min, max) {
  if(min >= 0 && max > min) {
    return (Math.random(min, max));
  }
  if (min > max || min == max){
    console.log('Число ' + max + ' должено быть больше ,чем ' + min) ;
  }
}
getRandomValue(1, 10);



const getRandomValueTask = function (min, max, number) {
  if(min >= 0 && max > min) {
    return Math.toFixed(number)(Math.random(min, max));
  }
  if (min > max || min == max) {
    console.log('Число ' + max + ' должено быть больше ,чем ' + min) ;
  }
}
getRandomValueTask(1, 10, 1);
