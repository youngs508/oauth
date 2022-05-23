let bodyObject = document.querySelectorAll('#body-object > div');
console.log(bodyObject.length);

let anObject = document.querySelector('div#news-contents');
console.log(anObject.parentElement);

let navElement = document.querySelector('div#nav');
console.log(navElement.className);
function printChildrenClasses(target) {
    if(target.hasChildNodes()) {
        let children = target.children;
        for(let i=0; i < children.length; i++) {
            console.log(children[i].className);
            printChildrenClasses(children[i]);
        }
    } else {
        return;
    }
}
printChildrenClasses(navElement);