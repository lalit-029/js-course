function addition(){
    var a,b;
    a = Number(document.getElementById('input1').value);
    b = Number(document.getElementById('input2').value);
    document.getElementById('result').value = a + b; 
    document.getElementById("result").classList.add("add");
}
function subtract(){
    var a,b;
    a = document.getElementById('input1').value;
    b = document.getElementById('input2').value;
    document.getElementById('result').value = a - b;
    document.getElementById("result").classList.add("sub");
}
function multiply(){
    var a,b;
    a = document.getElementById('input1').value;
    b = document.getElementById('input2').value;
    document.getElementById('result').value = a * b;
    document.getElementById("result").classList.add("mul");
}
function divide(){
    var a,b;
    a = document.getElementById('input1').value;
    b = document.getElementById('input2').value;
    document.getElementById('result').value = a / b;
    document.getElementById("result").classList.add("div");
}
function reset(){
    document.getElementsByClassName('reset-class')[0].value = '';
    document.getElementsByClassName('reset-class')[1].value = '';
    document.getElementsByClassName('reset-class')[2].value = '';
}
function concat(){
    var a,b;
    a = document.getElementById('input1').value;
    b = document.getElementById('input2').value;
    document.getElementById('result').value = `${a}${b}`; 
    document.getElementById("result").classList.add("concat");
}
function swap(){
    var a,b;
    a = Number(document.getElementById('input1').value);
    b = Number(document.getElementById('input2').value);
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    document.getElementById('result').value = `${a},${b}`; 
    document.getElementById("result").classList.add("swap");
}
function reminder(){
    var a,b;
    a = document.getElementById('input1').value;
    b = document.getElementById('input2').value;
    document.getElementById('result').value = a % b;
    document.getElementById("result").classList.add("reminder");
}
function doubles(){
    var a,b;
    a = document.getElementById('input1').value;
    b = document.getElementById('input2').value;
    document.getElementById('result').value = (a*2)*(b*2);
    document.getElementById("result").classList.add("doubles");
}