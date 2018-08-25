const siege = require("siege");
let sieger = siege().on(3003);

const randomNumbers = [];
const rand_skewed_distribution = (min, max, p) => Math.floor(min + (max - min) * Math.pow(Math.random(), p));
let count = 100000;

for (let i = 0; i < count; i += 1) {
  randomNumbers.push(rand_skewed_distribution(0, 10000000, .125));
}

for (let i = 0; i < randomNumbers.length; i += 1) {
  sieger = sieger.for(1).times.get(`/api/rooms/${randomNumbers[i]}/productinfo`);
}

sieger.attack();


