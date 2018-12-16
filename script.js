function deleteTable() {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "aTable");
    var myTable = document.getElementById("aTable");
    myTable.remove();
    document.body.appendChild(x);
    clearInterval(myVar);

}
function tableCreate() {
    var emptyText= ' ';
    var tableSize = document.getElementById('tableSize').value;
    var myTable = document.getElementById("aTable");
    var tbdy = document.createElement('tbody');



    for (var i = 0; i < tableSize; i++)
    {
        var tr = document.createElement('tr');

        for (var j = 0; j < tableSize; j++)
        {
            var td = document.createElement('td');
            td.setAttribute("onclick","setColor(id)");
            td.id= i + "." + j;
            td.appendChild(document.createTextNode(emptyText));
            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    myTable.appendChild(tbdy);

}

function setColor(pid) {
    var myObj=document.getElementById(pid);
    var status=0;
    if (myObj.style.backgroundColor==="lightblue") {
        myObj.style.backgroundColor="red";
    }
    else {
        myObj.style.backgroundColor="lightblue";
    }
    return status;
}

function putIntoArray(){


    var tableSize = document.getElementById('tableSize').value;
    var dataArray= new Array(tableSize);
    var newDataArray= new Array(tableSize);

    var count=0;

    var table = document.getElementById('aTable');
    var status = 0;

    for (var i = 0, row; row = table.rows[i]; i++) {

        dataArray[i]=new Array(tableSize);

        for (var j = 0, col; col = row.cells[j]; j++) {

            if (row.cells[j].style.backgroundColor==="red"){
                status=1;
            }
            else status=0;
            dataArray[i][j]=status*1;
        }
    }





    for (var i = 0; i< tableSize-1; i++) {

        newDataArray[i]=new Array(tableSize);

        for (var j = 0; j< tableSize-1; j++) {

            if (i > 0 && i < tableSize - 1 && j > 0 && j < tableSize - 1) {

                count = (dataArray[i - 1][j - 1]) + (dataArray[i-1][j]) + (dataArray[i - 1][j + 1]) +
                    (dataArray[i][j-1]) + (dataArray[i][j+1]) +
                    (dataArray[i + 1][j - 1]) + (dataArray[i+1][j]) + (dataArray[i + 1][j + 1]);
            }

            else if (i < 0) { //nestrādā no šī vietas, neieiet ciklā
                i = tableSize - 1;
                console.log(i);
                console.log(j);
                if (j < 0) {
                    console.log(i);
                    console.log(j);
                    j = tableSize - 1;
                    count = (dataArray[i - 1][j - 1]) + (dataArray[i-1][j]) + (dataArray[i - 1][j + 1]) +
                        (dataArray[i][j-1]) + (dataArray[i][j+1]) +
                        (dataArray[i + 1][j - 1]) + (dataArray[i+1][j]) + (dataArray[i + 1][j + 1]);
                }
                else if (j > tableSize - 1) {
                    j = 0;
                    console.log(i);
                    console.log(j);
                    count = (dataArray[i - 1][j - 1]) + (dataArray[i-1][j]) + (dataArray[i - 1][j + 1]) +
                        (dataArray[i][j-1]) + (dataArray[i][j+1]) +
                        (dataArray[i + 1][j - 1]) + (dataArray[i+1][j]) + (dataArray[i + 1][j + 1]);
                }
                else count = (dataArray[i - 1][j - 1]) + (dataArray[i-1][j]) + (dataArray[i - 1][j + 1]) +
                        (dataArray[i][j-1]) + (dataArray[i][j+1]) +
                        (dataArray[i + 1][j - 1]) + (dataArray[i+1][j]) + (dataArray[i + 1][j + 1]);
                console.log(i);
                console.log(j);
            }

            else if (i > tableSize - 1) {
                i = 0;
                if (j < 0) {
                    j = tableSize - 1;
                    count = (dataArray[i - 1][j - 1]) + (dataArray[i-1][j]) + (dataArray[i - 1][j + 1]) +
                        (dataArray[i][j-1]) + (dataArray[i][j+1]) +
                        (dataArray[i + 1][j - 1]) + (dataArray[i+1][j]) + (dataArray[i + 1][j + 1]);
                }
                else if (j > tableSize - 1) {
                    j = 0;
                    count = (dataArray[i - 1][j - 1]) + (dataArray[i-1][j]) + (dataArray[i - 1][j + 1]) +
                        (dataArray[i][j-1]) + (dataArray[i][j+1]) +
                        (dataArray[i + 1][j - 1]) + (dataArray[i+1][j]) + (dataArray[i + 1][j + 1]);
                }
                else count = (dataArray[i - 1][j - 1]) + (dataArray[i-1][j]) + (dataArray[i - 1][j + 1]) +
                        (dataArray[i][j-1]) + (dataArray[i][j+1]) +
                        (dataArray[i + 1][j - 1]) + (dataArray[i+1][j]) + (dataArray[i + 1][j + 1]);
            }


            if ((dataArray[i][j] === 1 && count === 2) || (dataArray[i][j] === 1 && count === 3)) {
                newDataArray[i][j] = 1;
            }
            else if (dataArray[i][j] === 1 && count < 2) {
                newDataArray[i][j] = 0;
            }

            else if(dataArray[i][j] === 1 && count > 3) {
                newDataArray[i][j] = 0;
            }

            else if (dataArray[i][j] === 0 && count === 3) {
                newDataArray[i][j] = 1;
            }
            else newDataArray[i][j] = 0;
        }

    }

    for (var i = 0; i<tableSize; i++) {

        for (var j = 0;j<tableSize; j++) {

            if(newDataArray[i][j]===1){
                document.getElementById(i+'.'+j).style.backgroundColor="red";
            }
            else if(newDataArray[i][j]===0) document.getElementById(i+'.'+j).style.backgroundColor="lightblue";
        }
    }


}

var myVar;


function run() {

    myVar=setInterval(function () {
        putIntoArray();
    }, 700);



}
function stop(){
    clearInterval(myVar);
}
