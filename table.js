// from data.js
var tableData = data;

// get a reference to the table body
var tbody = d3.select("tbody");



// Shows all the data in the file to the webpage
autopopulate(tableData);

function autopopulate(tableData) {
    
    // This clears the page of previous information.
    tbody.html("");
   
    //d3 will help to populate tableData 
    tableData.forEach((Continent) => {
    var row = tbody.append("tr");
    //console.log(Continent);
    
    Object.values(Continent).forEach((val) => {
        var cell = row.append("td");
        cell.text(val);
    });

    
});
}


// d3.select("#filter-btn").on("click", getNewData);

// function getNewData() {

// var Continent = d3.select("#Summary").property("value");

// console.log(Continent)

// let newData = tableData;

// if (Continent) {
//     newData = newData.filter(row => row.continent === Continent);
// }
// console.log(newData);
// autopopulate(newData);
// }

d3.select("#filter-btn").on("click", getNewData);

function getNewData() {

var Summary_one = d3.select("#Summary").property("value");

console.log(Summary_one)

let newData = tableData;

if (Summary_one) {
    newData = newData.filter(row => row.Type_of_Breach === Summary_one);
}
console.log(newData);
autopopulate(newData);
}