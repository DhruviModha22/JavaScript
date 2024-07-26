const color = ['red', 'pink', 'purple', 'green', 'indigo', 'black', 'magenta', 'lime', 'dark blue','aqua','aquamarine','beige','coral','darkcyan','lightseagreen'];
let a = 0;

function prev() {
    // a-=1;
    a = (a-1+color.length)%color.length;
    ucolor();
}

function next() {
    // a+=1;
    a = (a+1)%color.length;

    ucolor();
}
function ucolor() {
    const element = document.querySelector(".box");
    element.style.backgroundColor = color[a];
}   