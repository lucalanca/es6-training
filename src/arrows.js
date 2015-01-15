var fakeData = require('../lib/fake-data.js');

var fives = [];
fakeData.series.forEach(v => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});
console.log('fives', fives);


// Functions with only one expression (Expression bodies), there are no curly braces.
var odds = fakeData.series.filter(v => v % 2 !== 0);

// more than one argument argument requires parenthesis
var halfSeries = odds.map((v, i) => i);
console.log('odds',   odds);
console.log('halfSeries',   halfSeries);
