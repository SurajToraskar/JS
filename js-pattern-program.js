let rows=window.prompt("Enter The Rows:");
let columns=window.prompt("Enter The Columns:");
let symbol=window.prompt("Enter The Symbol:");

for(let i=1;i<=rows;i+=1){
    for(let j=1;j<=columns;j+=1){
        document.getElementById("rect").innerHTML+=symbol;
    }
    document.getElementById("rect").innerHTML+="<br/>"
}
