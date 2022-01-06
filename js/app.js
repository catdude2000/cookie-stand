'use strict';
console.log('app.js file is connected');


// Pat’s Salmon Cookies, needs to calculate the number of cookies each location must make every day. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:
// The minimum number of customers per hour.// The maximum number of customers per hour.// The average number of cookies purchased per customer.

// Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors.

//  outputs the following to the sales.html file:
let locationOne = {
  place: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  hourlySold: [],
  custPerHour: [],
  // actCust: randCust(23, 65),
  setCust: function(){
    for(let i = 0; i < 14; i++){
      this.custPerHour.push(randCust(this.minCust, this.maxCust));
      console.log('custperhour', this.custPerHour);
    }
    // let actCust = randCust(23, 65);
    // this.custPerHour = locationOne.actCust + ' customers this hour.';
    // this.actSold = Math.floor(locationOne.actCust * 6.3);
  }
};
let locationTwo = {
  place: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSales: 1.2,
  hourlySold: [],
  custPerHour: [],
  setCust: function(){
    for(let i = 0; i < 14; i++){
      this.custPerHour.push(randCust(this.minCust, this.maxCust));
      console.log('custperhour', this.custPerHour);
    }
    // let actCust = randCust(3, 24);
    // this.custPerHour = actCust + ' customers this hour.';
    // this.actSold = Math.floor(actCust * 1.2);
  }
};
let locationThree = {
  place: 'dubai',
  minCust: 11,
  maxCust: 38,
  avgSales: 3.7,
  hourlySold: [],
  custPerHour: [],
  setCust: function(){
    for(let i = 0; i < 14; i++){
      this.custPerHour.push(randCust(this.minCust, this.maxCust));
      console.log('custperhour', this.custPerHour);
    }
    // let actCust = randCust(11, 38);
    // this.custPerHour = actCust + ' customers this hour.';
    // this.actSold = Math.floor(actCust * 3.7);
  }
};
let locationFour = {
  place: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSales: 2.3,
  hourlySold: [],
  custPerHour: [],
  setCust: function(){
    for(let i = 0; i < 14; i++){
      this.custPerHour.push(randCust(this.minCust, this.maxCust));
      console.log('custperhour', this.custPerHour);
    }
  },
  setCookPerHour: function (){
    for(let i = 0; i < 14; i++){
      this.hourlySold.push(Math.floor(this.custPerHour * this.avgSales));
    }
  }
};
// function finalCountdown4 () {
//   for (let i = 0; i < 14; i++){
//     // console.log('locationFive', locationFive);
//     locationFour.hourlySold.push(Math.floor(locationFour.custPerHour[i] * locationFour.avgSales));
//   }
// }
let locationFive = {
  place: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSales: 4.6,
  hourlySold: [],
  custPerHour: [],
  // actCust: randCust(2, 16),
  setCust: function(){
    for(let i = 0; i < 14; i++){
      // this.custPerHour.push(this.hourlySold);
      this.custPerHour.push(randCust(this.minCust, this.maxCust));
      console.log('custperhour', this.custPerHour);
    }
    // this.custPerHour = this.actCust + ' customers this hour.';
    // this.actSold = Math.floor(this.actCust * 4.6);
  },
  setCookPerHour: function(){
    for(let i = 0; i < 14; i++){
      this.hourlySold.push(Math.floor(this.custPerHour[i] * 4.6));
    }
  }
};
// function finalCountdown5 () {
//   for (let i = 0; i < 14; i++){
//     // console.log('locationFive', locationFive);
//     locationFive.hourlySold.push(Math.floor(locationFive.custPerHour[i] * locationFive.avgSales));
//   }
// }



locationOne.setCust();
// console.log(locationOne);
locationOne.setCookPerHour();
locationTwo.setCust(); //activates setcust function
locationTwo.setCookPerHour();
locationThree.setCust();
locationThree.setCookPerHour();
locationFour.setCust();
locationFour.setCookPerHour();
locationFive.setCust();
locationFive.setCookPerHour();
// finalCountdown5();
// finalCountdown4();
function randCust (minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}
const popArray = [
  locationOne, locationTwo, locationThree,
  locationFour,
  locationFive];
console.log(popArray);
const timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



let soldList = document.getElementById('stList');
console.log(soldList);

for(let i = 0; i< popArray.length; i++){
  for(let j = 0; j < timeArray.length; j++){
    let soldListLi = document.createElement('li');
    soldListLi.textContent = timeArray[j] + popArray[i].hourlySold[j];
    // console.log('fff', popArray[i].hourlySold[j]);
    // console.log(soldListLi);

    soldList.appendChild(soldListLi);
    // create some lis
  }
}
// let h2 = document.createElement('h2');
// h2.textContent = locationFive.place;
// soldListLi.appendChild(h2);



// Store the results for each location in a separate array… perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:

// Seattle
// 6am: 16 cookies
// 7am: 20 cookies
