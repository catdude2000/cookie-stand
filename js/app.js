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
  setCust: function(){
    this.custPerHour = randCust(23, 65) + ' customers this hour.';
  }
};
let locationTwo = {
  place: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSales: 1.2,
  setCust: function(){
    this.custPerHour = randCust(3, 24) + ' customers this hour.';
  }
};
let locationThree = {
  place: 'dubai',
  minCust: 11,
  maxCust: 38,
  avgSales: 3.7,
  setCust: function(){
    this.custPerHour = randCust(11, 38) + ' customers this hour.';
  }
};
let locationFour = {
  place: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSales: 2.3,
  setCust: function(){
    this.custPerHour = randCust(20, 38) + ' customers this hour.';
  }
};
let locationFive = {
  place: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSales: 4.6,
  setCust: function(){
    this.custPerHour = randCust(2, 16) + ' customers this hour.';
  }
  actSold: function(){
    
  }
};


locationOne.setCust();
console.log(locationOne);

locationTwo.setCust();
locationThree.setCust();
locationFour.setCust();
locationFive.setCust();

function randCust (minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}


console.log()
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:

// Seattle
// 6am: 16 cookies
// 7am: 20 cookies
