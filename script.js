let stpbl1 = document.getElementById("stepbl1");
let stpbrbr1 = document.getElementById("stepbrbr1");

let stpbl2 = document.getElementById("stepbl2");
let stpbrbr2 = document.getElementById("stepbrbr2");

let stpbl3 = document.getElementById("stepbl3");
let stpbrbr3 = document.getElementById("stepbrbr3");

stpbl1.onmouseover = function() {
    stepbrbr1.style.borderBottom = "3px solid white"
}
stpbl1.onmouseout = function() {
    stpbrbr1.style.borderBottom = "3px solid black"
}

stpbl2.onmouseover = function() {
    stepbrbr2.style.borderBottom = "3px solid white"
}
stpbl2.onmouseout = function() {
    stpbrbr2.style.borderBottom = "3px solid black"
}

stpbl3.onmouseover = function() {
    stepbrbr3.style.borderBottom = "3px solid white"
}
stpbl3.onmouseout = function() {
    stpbrbr3.style.borderBottom = "3px solid black"
}