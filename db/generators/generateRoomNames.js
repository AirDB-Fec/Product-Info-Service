const words = require('an-array-of-english-words');

let array = [];
const getWords = function() {
  let num = 1;
    for (let j = 0; j < words.length; j++) {
      for (let i = 93781; i < 93818; i++) {
        array.push(`${words[j]}_${words[i]}`);
        num++;
      if (num > 1000) {
        console.log(JSON.stringify(array));
        return;
      }
    }
  }
}
getWords();
