'use strict';
console.log('app.js file is connected');

let locationOne = {
  place: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
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
      this.hourlySold.push(Math.floor(this.custPerHour[i] * this.avgSales));
    }
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
    }
  },
  setCookPerHour: function (){
    for(let i = 0; i < 14; i++){
      this.hourlySold.push(Math.floor(this.custPerHour[i] * this.avgSales));
    }
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
    }
  },
  setCookPerHour: function (){
    for(let i = 0; i < 14; i++){
      this.hourlySold.push(Math.floor(this.custPerHour[i] * this.avgSales));
    }
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
    }
  },
  setCookPerHour: function (){
    for(let i = 0; i < 14; i++){
      this.hourlySold.push(Math.floor(this.custPerHour[i] * this.avgSales));
    }
  }
};

let locationFive = {
  place: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSales: 4.6,
  hourlySold: [],
  custPerHour: [],
  total: this.sum,
  setCust: function(){
    for(let i = 0; i < 14; i++){
      this.custPerHour.push(randCust(this.minCust, this.maxCust));
    }
  },
  setCookPerHour: function(){
    for(let i = 0; i < 14; i++){
      this.hourlySold.push(Math.floor(this.custPerHour[i] * this.avgSales));
      // console.log('hourlysold', this.hourlySold);
    }
  },
  setTotal: function() {
    let sum = 0;
    for (let i = 0; i < this.hourlySold.length; i++) {
      sum += this.hourlySold[i];
    }
    console.log('sum', sum);
  }
};

locationOne.setCust();
locationOne.setCookPerHour();
locationTwo.setCust(); //activates setcust function
locationTwo.setCookPerHour();
locationThree.setCust();
locationThree.setCookPerHour();
locationFour.setCust();
locationFour.setCookPerHour();
locationFive.setCust();
locationFive.setCookPerHour();
locationFive.setTotal();

function randCust (minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}
const popArray = [
  locationOne, locationTwo, locationThree,
  locationFour,
  locationFive];
// console.log('poparray', popArray);
const timeArray = ['6:00am: ', '7:00am: ', '8:00am: ', '9:00am: ', '10:00am: ', '11:00am: ', '12:00pm: ', '1:00pm: ', '2:00pm: ', '3:00pm: ', '4:00pm: ', '5:00pm: ', '6:00pm: ', '7:00pm: ', 'Total: '];



let soldList = document.getElementById('stList');
console.log('soldlist', soldList);

for(let i = 0; i< popArray.length; i++){
  for(let j = 0; j < timeArray.length; j++){
    let soldListLi = document.createElement('li');
    soldListLi.textContent = timeArray[j] + popArray[i].hourlySold[j];
    soldList.appendChild(soldListLi);
    // create some lis
  }
}
// let sum = 0;
// for (let k = 0; k < soldList.length; k++) {
//   sum += soldList[k];
// }
// console.log(sum);


// Calculating the sum of these hourly totals; your output for each location should look like this:

// Seattle
// 6am: 16 cookies
// 7am: 20 cookies
