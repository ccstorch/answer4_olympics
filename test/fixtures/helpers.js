export const getRandomNumber = (limit = 100) => {
  return Math.floor(Math.random() * limit);
}

export const getRandomItemInArray = (array) => {
  return array[Math.floor(Math.random() * (array.length - 1))];
}
