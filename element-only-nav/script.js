const changeBodyRed = () => {
    document.body.firstElementChild.style.background = "red"
};
changeBodyRed();
let b = document.body;
console.log("First Child of b is:"+b.firstChild);//gives text,spaces,comments
console.log("First Child of b is:"+b.firstElementChild);//avoid text,spaces,comments
console.log(b.parentElement);
console.log(b.firstElementChild);
console.log(b.lastElementChild);
console.log(b.nextElementSibling);//null coz no next sibling of body
console.log(b.previousElementSibling);



