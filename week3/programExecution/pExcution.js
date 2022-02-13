const User = require('./users');

let user1 = new User(1, 2, "Lucifer", 15);
let user2 = new User(8, 6, "Vanessa", 8)

user1.gretting();
user2.gretting();
user1.stringData();
user2.add();
user2.subtract();
user1.multiply();
user1.divide();

