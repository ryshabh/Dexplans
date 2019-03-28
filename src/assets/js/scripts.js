

var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

$(document).ready(function(){
   
    var selectYear = document.getElementById("year");
    var selectMonth = document.getElementById("month");

   

    var monthAndYear = document.getElementById("monthAndYear");
    showCalendar(currentMonth, currentYear);
});

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    console.log("jump()")
    var selectYear = document.getElementById("year");
    var selectMonth = document.getElementById("month");

    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function jump_to_today(){
    var today = new Date();

    var Year = today.getFullYear();
    var Month = today.getMonth();
    showCalendar(Month, Year);

}

function showCalendar(month, year) {
    var today = new Date();
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
     var selectYear = document.getElementById("year");
    var selectMonth = document.getElementById("month");


    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}

function getpopup(){
  document.getElementById("linkmodal1").click();
}


function getValue(){
   console.log($("#newproject").val());
    var retVal = $("#newproject").val()
  // var retVal = prompt("Enter the name of the project", "New Project");
  if (retVal == null) {
    console.log("null value in project name");
    
    // Createmptytable();
  } else{
    localStorage.setItem("project",retVal)
    // document.getElementById("demo").innerHTML = retVal;
   
  }
}