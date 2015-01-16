var fakeData = require('../lib/fake-data.js');

class SuperHero {
  constructor({name, superpower}) {
    this.name       = name;
    this.superpower = superpower;
  }

  attack() {
    console.log(this.name + " uses " + this.superpower + " and it's super effective");
  }
}

class Batman extends SuperHero {
  constructor({ familyMoneyInBillions = 10}) {
    super({name: 'Batman', superpower: 'being awesome and rich'});
    this.familyMoneyInBillions = familyMoneyInBillions;
  }

  attack() {
    super.attack();
    console.log('  — Now he goes back to take care of his famliy investments (' + this.familyMoneyInBillions + 'B)');
  }
}

class Superman extends SuperHero {
  constructor({ hasHispterGlasses = true }) {
    super({name: 'Superman', superpower: 'looking good on shorts' });
    this.hasHispterGlasses = hasHispterGlasses;
  }

  attack() {
    super.attack();
    console.log('  — Now he goes back to ' + (this.hasHispterGlasses ? 'owning' : 'buying') + ' hispter glasses');
  }
}

var superman = new Superman({ hasHispterGlasses: false });
var batman   = new Batman({ familyMoneyInBillions: 30 });

superman.attack();
batman.attack();
