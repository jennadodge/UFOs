// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("hello there!")
}

// Fat Arrow Function
printHello = () => "Hello there!";

// Create a function
function buildTable(data) {
    // Clear out existing data
    tbody.html("");
    // Loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {                     
        // append a row to the table body
        let row = tbody.append("tr");            
        
        // loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");              
          cell.text(val);
          }
        );
      });
};

// New function to filter data based on date
function handleClick(){
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // check to see if a date was entered and filter the data by that date
    if (date) {
        // apply filter to the table data to only keep the rows where the "datetime" value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @Note: if no date was entered, then filteredData will just be the oringal Table Data
    buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);

