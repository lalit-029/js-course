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
// Check if no is even or odd
function evenodd(){
    var a = document.getElementById('input1').value;
    if (a % 2 == 0){
        document.getElementById('result').value = "even";
    }
    else{
        document.getElementById('result').value = "odd";
    }
}
// function calculate(){
//     var a,b;
//         a = document.getElementById('input1').value;
//         b = document.getElementById('input2').value;
//         c = Number(document.getElementById('input1').value);
//         d = Number(document.getElementById('input2').value);
//     if($("button").attr("id") == "add"){
//         document.getElementById('result').value = c + d; 
//         document.getElementById('result').classList.add("add");
//     }else if($("button").attr("id") == "sub"){
//         document.getElementById('result').value = a - b;
//         document.getElementById('result').classList.add("sub");
//     }else if($("button").attr("id") == "mul"){
//         document.getElementById('result').value = a * b;
//         document.getElementById('result').classList.add("mul"); 
//     }else if($("button").attr("id") == "div"){
//         document.getElementById('result').value = a / b;
//         document.getElementById('result').classList.add("div");
//     }else if($("button").attr("id") == "concat"){
//         document.getElementById('result').value = `${a}${b}`; 
//         document.getElementById('result').classList.add("concat");
//     }else if($("button").attr("id") == "doubles"){
//         document.getElementById('result').value = (a*2)*(b*2);
//         document.getElementById('result').classList.add("doubles");
//     }else if($("button").attr("id") == "swap"){
//         c = c ^ d;
//         d = c ^ d;
//         c = c ^ d;
//         document.getElementById('result').value = `${c},${d}`; 
//         document.getElementById('result').classList.add("swap");
//     }else if($("button").attr("id") == "rem"){
//         document.getElementById('result').value = a % b;
//         document.getElementById('result').classList.add("reminder");       
//     }else {
//         document.getElementsByClassName('reset-class')[0].value = '';
//         document.getElementsByClassName('reset-class')[1].value = '';
//         document.getElementsByClassName('reset-class')[2].value = '';
//     }
// }