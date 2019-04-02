

var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var cy;
var data_arr = [];
var txt_id;
var sheet_data=[];

var d=1;

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
    let idv=1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        row.style.height="70px";
        row.style.fontSize="17px";
        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                let cellInput = document.createElement("textarea");
                // date=0;
                cell.appendChild(cellText);
                row.appendChild(cell);
                cell.style.width="20px";
                // cell.style.fontSize="12px";

                //cell.appendChild(cellInput);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                 cell.style.width="20px";
                let cellInput = document.createElement("textarea");
                //let pid=document.createElement("id");
                cellInput.setAttribute("id",idv);
                // cell.style.fontSize="12px";
                
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-black");
                    cellInput.classList.add("bg-black");
                    cell.style.backgroundColor="#DCDCDC";
                    cellInput.style.backgroundColor="#DCDCDC";

                    
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                cellInput.style.height="100px";
                 cellInput.style.width="100px";
                cell.appendChild(cellInput);
                cell.onclick = function ()
                {
                    getval(cell.innerHTML,month,year,cellInput.id);   
                };
                 date++;
               
            }

           
            idv++;


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


function getval(cel,m,y, tx_id)
{
    // var mm=cel.concat("-");
    // var cm=mm.concat(m+1);
    sheet_data = [];
    d=1;
    var cm = m+1;
    txt_id = tx_id
    // var ss=cm.concat("-");
    // cy=ss.concat(y);
    cy = cel+'-'+cm+'-'+y;
    // console.log("value", cy);
    document.getElementById("task").style.visibility = 'visible';
    document.getElementById("task").focus();
    document.getElementById("t2").style.visibility = 'visible';
    var td1=document.getElementById('task').value;
    document.getElementById("task").focus();
    document.getElementById("task").value=" ";
    document.getElementById("t2").value=" ";
    document.getElementById("t3").value=" ";
    document.getElementById("t4").value=" ";
    document.getElementById("t5").value=" ";
    document.getElementById("t6").value=" ";
    document.getElementById("t7").value=" ";
    document.getElementById("t8").value=" ";
    document.getElementById("t9").value=" ";
    document.getElementById("t10").value=" ";
    document.getElementById("t11").value=" ";
    document.getElementById("t12").value=" ";
    document.getElementById("t13").value=" ";
    document.getElementById("t3").style.visibility = 'visible';
    document.getElementById("t4").style.visibility = 'visible';
    document.getElementById("t5").style.visibility = 'visible';
    document.getElementById("t6").style.visibility = 'visible';
    document.getElementById("t7").style.visibility = 'visible';
    document.getElementById("t8").style.visibility = 'visible';
    document.getElementById("t9").style.visibility = 'visible';
    document.getElementById("t10").style.visibility = 'visible';
    document.getElementById("t11").style.visibility = 'visible';
    document.getElementById("t12").style.visibility = 'visible';
    document.getElementById("t13").style.visibility = 'visible';
}

function inputTextValue(b)
 { 
    console.log("inputTextValue",txt_id )
    
      let br = document.createElement("br");
      var comma=".";
      var data=document.getElementById(b.id).value;
     if(data.length>1)
      {
        sheet_data.push(d+comma+data);
        d++;
         document.getElementById(txt_id).value=sheet_data.join("\n"); 
      } 
     
      //d++;
      //document.write("\n");       
}


function submitData()
{ 
    var arr=[];
    
    var data_obj = {}
    var td1=document.getElementById('task').value;
    if (td1.length > 1)
    {
        
        arr.push(td1);
    }
    var td2=document.getElementById("t2").value;
    if (td2.length > 1)
    {
         arr.push(td2);
    }
    var td3=document.getElementById("t3").value;
    if (td3.length > 1)
    {
        arr.push(td3);
    }
    var td4=document.getElementById('t4').value;
    if (td4.length > 1)
    {
        arr.push(td4);
    }
    var td5=document.getElementById("t5").value;
    if (td5.length > 1)
    {
        arr.push(td5);
    }
    var td6=document.getElementById("t6").value;
    if (td6.length > 1)
    {
        arr.push(dt6);
    }
     // var cy2 = cy.toString();
     // console.log("cy2", cy2)
    var obj ={};
    obj[cy] = arr;
    console.log("obj", obj)
    data_arr.push(obj)
     console.log("data",data_arr);
    for(i=0;i<arr.length;i++)
    {
        alert(cy  + " " + arr[i].cy);
    }
        


}