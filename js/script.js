function addition(){
    var a,b;
    a = Number(document.getElementById('input1').value);
    b = Number(document.getElementById('input2').value);
    document.getElementById('result').value = a + b; 
}
function subtract(){
    var a,b;
    a = document.getElementById('input1').value;
    b = document.getElementById('input2').value;
    document.getElementById('result').value = a - b;
}
function multiply(){
    var a,b;
    a = document.getElementById('input1').value;
    b = document.getElementById('input2').value;
    document.getElementById('result').value = a * b;
}
function divide(){
    var a,b;
    a = document.getElementById('input1').value;
    b = document.getElementById('input2').value;
    document.getElementById('result').value = a / b;
}
function reset(){
    document.getElementsByClassName('reset-class')[0].value = '';
    document.getElementsByClassName('reset-class')[1].value = '';
    document.getElementsByClassName('reset-class')[2].value = '';
}
function swap(){
    var a,b;
    a = Number(document.getElementById('input1').value);
    b = Number(document.getElementById('input2').value);
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    document.getElementById('result').value = `${a},${b}`; 
}