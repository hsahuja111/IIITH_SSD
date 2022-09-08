
var count=0;

function addData()
{
var name = document.getElementById("NameOfStudent").value;
var roll = document.getElementById("RollNoOfStudent").value;

var tr = document.createElement('tr');

var td1 = tr.appendChild(document.createElement('td'));
var td2 = tr.appendChild(document.createElement('td'));

td1.innerHTML = name;
td2.innerHTML = roll;

document.getElementById("tbl").appendChild(tr);
count = count+1;
}

function deleteData()
{
    document.getElementsByTagName("tr")[count].remove();
    count = count- 1;
}