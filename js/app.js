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


const timeArray = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']; //array needed to display set data on page




Location.prototype.header = function() {
  let locTable = document.getElementById('stList');
  let headerRow = document.createElement('tr');
  headerRow.textContent = 'Location';


  for(let i = 0; i < timeArray.length; i++){
    let timeData = document.createElement('td');
    timeData.textContent = timeArray[i];
    headerRow.appendChild(timeData);
  }

  let totals = document.createElement('td'); //adds text to end of table
  totals.textContent = 'totals';
  headerRow.appendChild(totals);

  locTable.appendChild(headerRow);

};

Location.prototype.footer = function(){
  let locTable = document.getElementById('stList');
  let footerRow= document.createElement('tr');
  footerRow.textContent = 'Totals';

  let totalOfTotals =0;
  for(let j = 0; j < timeArray.length; j++){
    let hourlyTotal = 0;
    for(let i = 0; i < allLocals.length; i++){
      hourlyTotal +=allLocals[i].hourlySold[j];
      totalOfTotals += allLocals[i].hourlySold[j];
    }
    let totalHourCell= document.createElement('td');
    totalHourCell.textContent= hourlyTotal;
    footerRow.appendChild(totalHourCell);
  }



  console.log('toft',totalOfTotals);
  let totalTotals = document.createElement('td');
  console.log('tottals', totalTotals);
  totalTotals.textContent = totalOfTotals;
  footerRow.appendChild(totalTotals);
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


function newTotal(){
  let clearTable = document.getElementById('stList');
  clearTable.innerHTML = ''; //clears table to redo with new object
  Location.prototype.header();

  for(let i = 0; i < allLocals.length; i++){

    allLocals[i].render();
  }

  Location.prototype.footer();
}

//global variables

let formElement = document.getElementById('newLocale');
let addPlace;

function handleSubmit(event){
  event.preventDefault();
  event.stopPropagation();
  let placeValue = event.target.place.value;
  let minCustValue = parseInt(event.target.minCust.value);
  let maxCustValue = parseInt(event.target.maxCust.value);
  let avgSalesValue = parseInt(event.target.avgSales.value);

  console.log(typeof minCustValue);

  addPlace = new Location(placeValue, minCustValue, maxCustValue, avgSalesValue, [], [], 0);

  addPlace.setCust();
  addPlace.setCookPerHour();
  addPlace.setTotal();
  console.log(addPlace);


  allLocals.push(addPlace);
  newTotal();

  let form = document.getElementById('newLocale');
  form.reset();
}

formElement.addEventListener('submit', handleSubmit);
newTotal();
