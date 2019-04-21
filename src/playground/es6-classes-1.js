class Person {
  constructor(name, age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi ${this.name}`;
  }
  getDescripton() {
    return `My age ${this.age} and my name is ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescripton() {
    let desc = super.getDescripton();
    if (this.hasMajor()) {
      return `as astudent my name is ${this.name}`;
    }
    return desc;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGretting() {
      let greeting = super.getGretting();
    if(this.homeLocation) {
        return `as traveller ${this.homeLocation}`;
    }

      return greeting;
  }
}

const me = new Traveller('Ramazan Kanbur', 29, 'Nevşehir');
console.log(me.getGretting());
