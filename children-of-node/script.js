console.log(document.body.firstChild); // accessing the first child node of body // text node in console bcs of space 
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(document.body.childNodes[0]);//===document.body.childNodes[0]
console.log(document.body.childNodes[document.body.childNodes.length-1]);//===document.body.lastChild
console.log(document.body.hasChildNodes());
let arr = Array.from(document.body.childNodes);
console.log(arr); // converting childNodes list to array
