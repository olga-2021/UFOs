// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");  // First, clear out any existing data
  
    // Next, loop through each object in the data
data.forEach((dataRow) => {  // and append a row and cells for each value in the row
    let row = tbody.append("tr");  // Append a row to the table body
    Object.values(dataRow).forEach((val) => { // Loop through each field in the dataRow 
        let cell = row.append("td");  // add each value as a table cell (td)
        cell.text(val);  // add each value from the object into a cell
        }
    );
  });
}