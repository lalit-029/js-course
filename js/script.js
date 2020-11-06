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
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('result').value = '';
}