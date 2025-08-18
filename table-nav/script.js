// let t = document.body.firstElementChild.firstElementChild;
// console.log(t);//table
// console.log(t.rows);
// console.log(t.caption);
// console.log(t.tHead);
// console.log(t.tHead.firstElementChild);
// console.log(t.tFoot);
// console.log(t.tBodies);
// console.log(t.rows[0].cells);//gives you th and td
// console.log(t.rows[0].rowIndex);//gives you index of row in table
// console.log(t.rows[1].rowIndex);

// //type of window and document
// console.log(typeof window);//object
// console.log(typeof document);//object

//my practice
let e = document.querySelector("table");
console.log(e);
console.log(e.rows);
console.log(e.tHead);
console.log(e.tBodies);
console.log(e.tFoot);
console.log(e.rows[0]);
console.log(e.rows[0].cells);
console.log(e.rows[0].rowIndex);
console.log(e.rows[1].rowIndex);
let p = document.getElementById("myTable");
console.log(p); //accessing table by id
console.log(e.rows[6].sectionRowIndex);
