//Select the <tbody> of a table and print all its rows in the console.
let t = document.querySelector("table tbody");
console.log(t.rows);

for(let a = 0; a < t.rows.length; a++) {
    console.log(t.rows[a]);
}

//From a given <tr>, print its parent element.
let row1 = t.rows[1];
let row2 = t.rows[2];
console.log(row1.parentElement); 
console.log(row2.parentElement);

//Get the first child of <ul> and change its text to "First item updated".
let u = document.querySelector("#myList");
let firstChild = u.firstElementChild;
console.log(firstChild);
firstChild.textContent = "First item updated";


//Select the last row of a table and change its background color.
let last = t.rows[t.rows.length-1];
console.log(last);
last.style.background = "red";


//From a paragraph (<p>), print its next sibling.
let para = document.querySelector("p");
console.log(para);
let paraNextSibling = para.nextElementSibling;
console.log(paraNextSibling);

//In a table, loop through all rows and print the text of the 2nd column.
for(let a = 0; a < t.rows.length; a++) {
    console.log(t.rows[a]);
}
console.log(t.rows[1].textContent);

//From a table cell (<td>), go up to its <tr>, then move to the next row, and print the first cell’s text.
let td = t.querySelector("td");
console.log(td);
let tr = td.parentElement;
console.log(tr);
let nextTr = tr.nextElementSibling;
console.log(nextTr);
console.log(nextTr.cells[0].textContent);


//Change the background color of every alternate row in a table (like zebra stripes).
let alternate = document.querySelectorAll("table tr");
for(let i = 0; i < alternate.length; i++)
{
    if(i % 2 == 0)
    {
        alternate[i].style.background = "grey";
    }
    else
    {
        alternate[i].style.background = "brown";
    }
}

//Count how many direct children a <div> has.
let firstDiv = document.querySelector("div");
console.log(firstDiv.childNodes.length);

//From the last <li> in a list, find its previous sibling and change its text to "Second last item".
let lii = document.getElementById("myList");
let lastLi=lii.lastElementChild;
console.log(lastLi);
let prevSibling = lastLi.previousElementSibling;
prevSibling.textContent = "Second last item";
console.log(prevSibling);

//From a given <td>, navigate to the <thead> of the table and print all its column headers.
let tdd = document.querySelector("table td");
let theadNav = tdd.parentElement.parentElement.previousElementSibling;
console.log(theadNav);
//get all th inside ththead
let allTh = theadNav.querySelectorAll("th");
allTh.forEach((h)=>{
    console.log(h.textContent);
});


//Write code to swap the first row and last row of a table.
let tablee = document.querySelector("table tbody");
let table = tablee.querySelectorAll("tr");
let firstR = table[0];
let lastR = table[table.length-1];
console.log(firstR);
console.log(lastR);
let firstClone = firstR.cloneNode(true);//first row clone
let lastClone = lastR.cloneNode(true);//second row clone
tablee.replaceChild(lastClone,firstR);//replaceing things
tablee.replaceChild(firstClone,lastR);

//Navigate from <tbody> → <tr> → <td> and replace every cell’s text with "Cell Updated".
let navigation = document.querySelectorAll("tbody tr td");
navigation.forEach((a)=>
{
    a.textContent = "cell updated";
});

//Starting from a <td>, move up to the <table>, then print the number of rows in its <tbody>.
let firstTd = document.querySelector("td");
let moveToTable = firstTd.closest("table");
let tbody = moveToTable.querySelector("tbody");
console.log(tbody.rows.length);
