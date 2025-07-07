// 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  older = function (other) {
    if (this.age > other.age) {
      return `${this.firstName} è piu vecchio di ${other.firstName} `;
    } else if (this.age < other.age) {
      return `${other.firstName} è più vecchio di ${this.firstName}`;
    } else {
      return `${this.firstName} e ${other.firstName} hanno la stessa età`;
    }
  };
}

const user1 = new User("Silva", "Zoldick", 35, "Roma");

console.log(user1);

const user2 = new User("Isaac", "Netero", 20, "Cagliari");

console.log(user2);

console.log(user1.older(user2));

const user3 = new User("Gon", "Freecs", 20, "Torino");

console.log(user2.older(user3));

const user4 = new User("Zeno", "Zoldick", 19, "Genova");

console.log(user2.older(user4));

// 2
