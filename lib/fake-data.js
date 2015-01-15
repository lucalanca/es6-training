var faker = require('faker');

var people = [];
for (var i = 0; i < 20; i++) {
  people.push(faker.helpers.createCard());
}

var series = [];
for (var i = 0; i < 20; i++) {
  series.push(i);
}

module.exports = {
  people: people,
  series: series
};
