// bg-color a tutta la pagina
const body = document.querySelector("body");
body.style.backgroundColor = "#083b4c";

// centro il titolo nell'header
const header = document.querySelector("header");
header.classList.add("text-center", "text-white", "p-3");

// creo scacchiera
const containerScacchiera = document.getElementById("container-scacchiera");
console.log(containerScacchiera);


/* for (i=1; i<=7; i++) {
    let col = document.createElement("div");
    col.classList.add("col");
    row.append(col)
}
 */

for (i = 1; i <= Math.ceil(100 / 7); i++) {
    let row = document.createElement("div");
    row.classList.add("row", "border");
    containerScacchiera.append(row);

    
    for (j = 1; j<=7; j++) {
        let col = document.createElement("div");
        col.classList.add("col", "ratio", "ratio-1x1", "border");
        row.append(col);
    }


}