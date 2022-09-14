'use strict';

function User(firstName, lastName, email, age, isLoggedIn){
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isLoggedIn = isLoggedIn;
};

const userProto = {
  getFullName: function(){
    return `Full name is ${this.firstName} ${this.lastName}`;
  },
  logIn: function(){
    const loggetIn = this.isLoggedIn = true;
    return loggetIn;
  },
  logOut: function(){
    const loggetOut = this.isLoggedIn = false;
    return loggetOut;
  },
  checkUserStatusLoggedIn: function(){
    const result = (`${this.isLoggedIn}` === this.logIn) ? 'is logged in' : 'not logged in';
      return result;
  },
};

User.prototype = userProto;

const user1 = new User('Dmytro', 'Bieliei', 'dmbieliei@gmail.com', 32,);
const user2 = new User('Ivan', 'Radkin', 'radkin@gmain.com', 46,);
const user3 = new User('Marina', 'Savitska', 'nolik@i.ua', 23,);









