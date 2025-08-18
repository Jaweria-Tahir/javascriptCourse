//DOM collection
// let nodes = $0.childNodes;//$0 in browser
// for(let node of nodes)
// {
//     console.log(node);
    
// }

//sibling
//head is previous or left sibling of html
//body is next or right sibling of html
console.log(document.head.nextElementSibling);
console.log(document.body.previousElementSibling);

//parent
console.log(document.body.firstChild);
let a = document.body.firstChild;
console.log(a.parentNode);//return anytype of parent
console.log(a.parentElement);//return parent only if it is element else returns null
console.log(a.nextSibling);
