'use strict';

//Destructuring of array
var address = ['50 HP', 'Boston', 'MA', '02125'];

var city = address[1],
    state = address[2],
    zip = address[3];

console.log('you are in ' + city + ' ' + state);

var items = [, '8', '10', '12'];
var _items$ = items[0],
    item = _items$ === undefined ? 'Vada Pav' : _items$,
    medium = items[2],
    large = items[3];

console.log(' A medium ' + item + ' costs ' + medium + '$');

/*  //destructuring of object
const person = {
      name: ' kvk',
      age: 27,
      location: {
          city: 'SJC',
          temp: 33,
      } 
  };
  const {name: firstName = 'Anonymous ',age} = person;
  console.log(`${firstName} is ${age}`);
   const {city,temp} = person.location
   if(city && temp){
  console.log(`It's ${temp} in ${city}`);
  }
    const book = {
      title: 'ego',
      author: 'kvk',
      publisher:
      {
          //name: 'veera'
      }
  }
   const {name: publisherName = 'Self Published'} = book.publisher;
  if(publisherName){
  console.log(`${publisherName} `);
  } */