// bg-color a tutta la pagina
const body = document.querySelector("body");
body.style.backgroundColor = "#083b4c";

// centro il titolo nell'header
const header = document.querySelector("header");
header.classList.add("text-center", "text-white", "p-3");

// creo scacchiera
const containerScacchiera = document.getElementById("container-scacchiera");
console.log(containerScacchiera);


let row = document.createElement("div");
row.classList.add('row', 'row-cols-7');
row.style.height = "500px";
containerScacchiera.append(row);

for (i = 1; i <= 100; i++) {
    let col = document.createElement("div");
    col.classList.add("col", "m-3", "ratio", "ratio-1x1", "justify-content-center", "d-flex", "align-items-center");
    col.textContent = i;
    let bgColor = "#1389b2";
    
    if ((i % 3 === 0) && (i % 5 === 0)){
        bgColor = "#f0466f";
        col.textContent = "fizzBuzz";
    } else if (i % 3 === 0) {
        bgColor = "#0bd6a1";
        col.textContent = "fizz";
    } else if (i % 5 === 0){
        bgColor = "#ffd166";
        col.textContent = "buzz"
    } 
    
    col.style.backgroundColor = bgColor;
    row.append(col);
}