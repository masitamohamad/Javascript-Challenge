// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO sighting data from data.js
// console.log(data);

///////////////////////////////////////////////////////////////////////////////////
// Step 1: Loop Through `data` and console.log each UFO sighting object
// data.forEach(function(UFOSighting) {
//   console.log(UFOSighting);
// });

///////////////////////////////////////////////////////////////////////////////////
// Step 2:  Use d3 to append one table row `tr` for each UFO sighting object
// data.forEach(function(UFOSighting) {
//   console.log(UFOSighting);
//   var row = tbody.append("tr");
// });

///////////////////////////////////////////////////////////////////////////////////
// Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(UFOSighting) {
//   console.log(UFOSighting);
//   var row = tbody.append("tr");

//   Object.entries(UFOSighting).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

///////////////////////////////////////////////////////////////////////////////////
// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(UFOSighting) {
//   console.log(UFOSighting);
//   var row = tbody.append("tr");

//   Object.entries(UFOSighting).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value in the UFO sighting object
//     var cell = row.append("td");
//   });
// });

///////////////////////////////////////////////////////////////////////////////////
// Step 5: Use d3 to update each cell's text with UFO sighting values (datetime, city, state, country, shape, durationMinutes, comments)

// data.forEach(function(UFOSighting) {
//   console.log(UFOSighting);
//   var row = tbody.append("tr");
//   Object.entries(UFOSighting).forEach(function([key, value]) {
//     console.log(key, value);
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

///////////////////////////////////////////////////////////////////////////////////
// Refactor to use arrow functions

data.forEach((UFOSighting) => {
  var row = tbody.append("tr");
  Object.entries(UFOSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

///////////////////////////////////////////////////////////////////////////////////
// Event Listeners


// Select the button
// Select the input element and get the raw HTML node
// Get the value property of the input element
// Select tbody element and remove all children 
// append filteredData to tbody

var button = d3.select("#filter-btn");

button.on("click",function () {
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  // console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  console.log(filteredData);

  var tbody = d3.select("tbody");
  tbody.html("");

  filteredData.forEach((filteredUFOSighting) => {
    var row = tbody.append("tr");
    Object.entries(filteredUFOSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

});
