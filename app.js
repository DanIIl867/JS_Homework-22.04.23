class Animal {
   #name;
   #age;
   constructor(name, age) {
      this.#name = name;
      this.#age = age;
   }
   getAge() {
      return this.#age;
   }
   getInfo() {
      return `Name: ${this.#name}, Age: ${this.#age}`;
   }
}
class Dog extends Animal {
   static legsCount = 4;
   bark() {
      return "Woof!";
   }
}
class GuideDog extends Dog {
   #isTrained;
   constructor(name, age) {
      super(name, age);
      this.#isTrained = true;
   }
   leadBlind() {
      return "Following the guide dog";
   }
   getInfo() {
      return `${super.getInfo()}, Is trained: ${this.#isTrained}`;
   }
}
const myGuideDog = new GuideDog("Buddy", 5);
console.log(myGuideDog.getInfo()); // Output: "Name: Buddy, Age: 5, Is trained: true"
console.log(Dog.legsCount); // Output: 4
console.log(myGuideDog.bark()); // Output: "Woof!"