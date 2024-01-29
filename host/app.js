
//operators
function operators() { //addition
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;

document.getElementById('output').innerHTML = +a +  +b;

}
new operators();


function operators2() {  // subtraction
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
document.getElementById('output').innerHTML = +a -    +b;
}
new operators();


function operators3() {   //multipication
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
document.getElementById('output').innerHTML = +a  *   +b;
}
new operators();



function operators4() { //divide
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
document.getElementById('output').innerHTML = +a  /   +b;
}
new operators();



function operators5() {  //    **  
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
document.getElementById('output').innerHTML = a **  b;
}
new operators();

function operators6() {  //    modulus
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
document.getElementById('output').innerHTML = +a  %   +b;
}
new operators();