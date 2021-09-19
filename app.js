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


function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
