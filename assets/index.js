'use strict';

function User(firstName, lastName, email, age, isLoggedIn){
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isLoggedIn = isLoggedIn;
};

const userProto = {
  getFullName: function( user ){
    console.log(`${user} full name is ${this.firstName} ${this.lastName}`);
  },
};
  
User.prototype = userProto;

const user1 = new User('Dmytro', 'Bieliei', 'dmbieliei@gmail.com', '32', true);
const user2 = new User('Ivan', 'Radkin', 'radkin@gmain.com', '46', false);
const user3 = new User('Marina', 'Savitska', 'nolik@i.ua', '23', true);









