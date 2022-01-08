'use strict';
console.log('app.js file is connected');

function Location(place, minCust, maxCust, avgSales, hourlySold, custPerHour, totalCookieSum) {
  this.place = place;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.hourlySold = hourlySold;
  this.custPerHour = custPerHour;
  this.totalCookieSum = totalCookieSum;
}

const locationOne = new Location('Seattle', 23, 65, 6.3, [], [], 0);

const locationTwo = new Location('Tokyo', 3, 24, 1.2, [], [], 0);

const locationThree = new Location('Dubai', 11, 38, 3.7, [], [], 0);

const locationFour = new Location('Paris', 20, 38, 2.3, [], [], 0);

const locationFive = new Location('Lima', 2, 16, 4.6, [], [], 0);


function randCust (minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust); //function used in each object to create randomized numbers of customers
}




Location.prototype.setCust = function(){
  for(let i = 0; i < 14; i++){
    this.custPerHour.push(randCust(this.minCust, this.maxCust)); //fills custPerHour array with numbers using randCust function
    // console.log('custperhour', this.custPerHour);
  }
};

Location.prototype.setCookPerHour = function(){
  for(let i = 0; i < 14; i++){
    this.hourlySold.push(Math.floor(this.custPerHour[i] * this.avgSales)); //uses set avg sales with already randomized to give number of cookies sold per hour
  }
};

Location.prototype.setTotal = function() {
  for (let i = 0; i < this.hourlySold.length; i++) { //adds up randomized hourly sold for a total (behind the scenes)
    this.totalCookieSum += this.hourlySold[i];
  }
};


// let locationOne = { //creates first object
//   place: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgSales: 6.3,
//   hourlySold: [], //creates array to be filled later
//   custPerHour: [],
//   totalCookieSum: 0,
//   setCust: function(){
//     for(let i = 0; i < 14; i++){
//       this.custPerHour.push(randCust(this.minCust, this.maxCust)); //fills custPerHour array with numbers using randCust function
//       // console.log('custperhour', this.custPerHour);
//     }
//   },
//   setCookPerHour: function (){
//     for(let i = 0; i < 14; i++){
//       this.hourlySold.push(Math.floor(this.custPerHour[i] * this.avgSales)); //uses set avg sales with already randomized to give number of cookies sold per hour
//     }
//   },
//   setTotal: function() {
//     // let sum = 0;
//     for (let i = 0; i < this.hourlySold.length; i++) { //adds up randomized hourly sold for a total (behind the scenes)
//       this.totalCookieSum += this.hourlySold[i];
//     }
//     // console.log('sum', sum);
//   }
// };
// let locationTwo = {
//   place: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgSales: 1.2,
//   hourlySold: [],
//   custPerHour: [],
//   totalCookieSum: 0,
//   setCust: function(){
//     for(let i = 0; i < 14; i++){
//       this.custPerHour.push(randCust(this.minCust, this.maxCust));
//     }
//   },
//   setCookPerHour: function (){
//     for(let i = 0; i < 14; i++){
//       this.hourlySold.push(Math.floor(this.custPerHour[i] * this.avgSales));
//     }
//   },
//   setTotal: function() {
//     // let sum = 0;
//     for (let i = 0; i < this.hourlySold.length; i++) {
//       this.totalCookieSum += this.hourlySold[i];
//     }
//     // console.log('sum', sum);
//   }
// };
// let locationThree = {
//   place: 'dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgSales: 3.7,
//   hourlySold: [],
//   custPerHour: [],
//   totalCookieSum: 0,
//   setCust: function(){
//     for(let i = 0; i < 14; i++){
//       this.custPerHour.push(randCust(this.minCust, this.maxCust));
//     }
//   },
//   setCookPerHour: function (){
//     for(let i = 0; i < 14; i++){
//       this.hourlySold.push(Math.floor(this.custPerHour[i] * this.avgSales));
//     }
//   },
//   setTotal: function() {
//     // let sum = 0;
//     for (let i = 0; i < this.hourlySold.length; i++) {
//       this.totalCookieSum += this.hourlySold[i];
//     }
//     // console.log('sum', sum);
//   }
// };
// let locationFour = {
//   place: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgSales: 2.3,
//   hourlySold: [],
//   custPerHour: [],
//   totalCookieSum: 0,
//   setCust: function(){
//     for(let i = 0; i < 14; i++){
//       this.custPerHour.push(randCust(this.minCust, this.maxCust));
//     }
//   },
//   setCookPerHour: function (){
//     for(let i = 0; i < 14; i++){
//       this.hourlySold.push(Math.floor(this.custPerHour[i] * this.avgSales));
//     }
//   },
//   setTotal: function() {
//     // let sum = 0;
//     for (let i = 0; i < this.hourlySold.length; i++) {
//       this.totalCookieSum += this.hourlySold[i];
//     }
//     // console.log('sum', sum);
//   }
// };

// let locationFive = {
//   place: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgSales: 4.6,
//   hourlySold: [],
//   custPerHour: [],
//   totalCookieSum: 0,
//   setCust: function(){
//     for(let i = 0; i < 14; i++){
//       this.custPerHour.push(randCust(this.minCust, this.maxCust));
//     }
//   },
//   setCookPerHour: function(){
//     for(let i = 0; i < 14; i++){
//       this.hourlySold.push(Math.floor(this.custPerHour[i] * this.avgSales));
//       // console.log('hourlysold', this.hourlySold);
//     }
//   },
//   setTotal: function() {
//     // let sum = 0;
//     for (let i = 0; i < this.hourlySold.length; i++) {
//       this.totalCookieSum += this.hourlySold[i];
//     }
//     // console.log('sum', sum);
//   }
// };

locationOne.setCust(); //activates setcust function for location inside object
locationOne.setCookPerHour(); //" setCookPerHour "
locationOne.setTotal(); //" setTotal "
locationTwo.setCust();
locationTwo.setCookPerHour();
locationTwo.setTotal();
locationThree.setCust();
locationThree.setCookPerHour();
locationThree.setTotal();
locationFour.setCust();
locationFour.setCookPerHour();
locationFour.setTotal();
locationFive.setCust();
locationFive.setCookPerHour();
locationFive.setTotal();

const popArray = [
  locationOne, locationTwo, locationThree, locationFour, locationFive]; //array needed to populate the objects with data
console.log('poparray', popArray);
const timeArray = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']; //array needed to display set data on page


// let soldList = document.getElementById('stList'); //links soldList to the stList tag in html
// console.log('soldlist', soldList);

// for(let i = 0; i< popArray.length; i++){ //iterates through array of location objects, runs 5 times
//   for(let j = 0; j < timeArray.length; j++){ //iterates through array of set times for each object in popArray, runs 15 times
//     let soldListLi = document.createElement('li'); //creates list items (li's) in soldListLi
//     soldListLi.textContent = timeArray[j] + popArray[i].hourlySold[j]; //fills list with iterated arrays to display hourly sold from each object/location
//     soldList.appendChild(soldListLi); //puts soldListLi data iterated above into soldList (which is linked to stList in the html file)
//   }
//   let storeTotal = document.createElement('li'); //creates additional li item
//   storeTotal.textContent = 'Total: ' + popArray[i].totalCookieSum; // creates text for li
//   soldList.appendChild(storeTotal); //puts text in li
// }


Location.prototype.header = function() {
  let locTable = document.getElementById('stList');
  let headerRow = document.createElement('tr');
  headerRow.textContent = 'Location';
  for(let i = 0; i < timeArray.length; i++){
    let timeData = document.createElement('td');
    timeData.textContent = timeArray[i];
    headerRow.appendChild(timeData);
  }

  let totals = document.createElement('td'); //adds sums to end of table
  totals.textContent = 'totals';
  headerRow.appendChild(totals);

  locTable.appendChild(headerRow);

};

Location.prototype.footer = function(){
  let locTable = document.getElementById('stList');
  console.log('lotab', locTable);
  let footerRow= document.createElement('tr');
  let footerCell = document.createElement('td');
  footerRow.textContent = 'Totals';
  footerRow.appendChild(footerCell);
  for(let i = 0; i < allLocals.length; i++){

    for(let j = 0; j < timeArray.length; j++){
      let hourTotes = document.getElementById('stList');
      let hourTotals = document.createElement('td');
      hourTotes += allLocals[i].hourlySold[j];
      hourTotals.textContent = hourTotes;
      console.log('hourtoes', allLocals[i].hourlySold[j]);
      footerRow.appendChild(hourTotes);
    }


  }
  locTable.appendChild(footerRow);
};

Location.prototype.render = function() {
  let locTable = document.getElementById('stList');
  let locRow = document.createElement('tr');
  let nameCell = document.createElement('td');
  nameCell.textContent = this.place;
  locRow.appendChild(nameCell);
  //get hourly cookie totals for render
  for(let i = 0; i < timeArray.length; i++){
    let hourlyData = document.createElement('td');
    hourlyData.textContent = this.hourlySold[i];
    locRow.appendChild(hourlyData);
  }
  let allStoreDayTotals = document.createElement('td'); //adds sums to end of table
  allStoreDayTotals.textContent = this.totalCookieSum;
  locRow.appendChild(allStoreDayTotals);
  //this is where totals are coming from



  locTable.appendChild(locRow); //putting row onto table

};




let allLocals = [locationOne, locationTwo, locationThree, locationFour, locationFive];

Location.prototype.header();

for(let i = 0; i < allLocals.length; i++){
  allLocals[i].render();
}

Location.prototype.footer();
