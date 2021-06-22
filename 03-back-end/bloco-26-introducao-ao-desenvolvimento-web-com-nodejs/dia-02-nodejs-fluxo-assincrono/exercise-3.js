const { sumThreeNumbers } = require('./exercise-1');

const getRandomNumber = () => Math.floor(Math.random() * 100);
const numbers = Array.from({ length: 3 }, getRandomNumber);

(async () => {
  try {
    const result = await sumThreeNumbers(...numbers);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
})();
