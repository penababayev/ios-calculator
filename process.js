var oneBtn=document.getElementById('calc-one');
var twoBtn=document.getElementById('calc-two');
var threeBtn=document.getElementById('calc-three');
var fourBtn=document.getElementById('calc-four');
var fiveBtn=document.getElementById('calc-five');
var sixBtn=document.getElementById('calc-six');
var sevenBtn=document.getElementById('calc-seven');
var eightBtn=document.getElementById('calc-eight');
var nineBtn=document.getElementById('calc-nine');
var zeroBtn=document.getElementById('zero-ten');

var displayValElementBtn=document.getElementById('calc-display-val');
var decimalBtn=document.getElementById('calc-decimal');
var clearBtn=document.getElementById('calc-clear');
var backspaceBtn=document.getElementById('calc-backspace');

var displayVal='0';
var pendingVal;
var evalStringArray=[];

var calcNumBtns=document.getElementsByClassName('calc-btn-num');
var calcOperatorBtns=document.getElementsByClassName('calc-btn-operator');


var updateDisplayVal = (clickObj) => {
    var btnTex=clickObj.target.innerText;
    if (displayVal==='0')
    
        displayVal='';
        displayVal+=btnTex;
        displayValElementBtn.innerText=displayVal;
    

}

for(let i=0; i<calcNumBtns.length; i++)
{
calcNumBtns[i].addEventListener('click',updateDisplayVal,false);
}

var performOperation=(clickObj)=> {
    var operator=clickObj.target.innerText;

switch (operator) {
    case "+":
        pendingVal=displayVal;
        displayVal="0";
        displayValElementBtn.innerText=displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('+');
        break;

    case "-":
        pendingVal=displayVal;
        displayVal="0";
        displayValElementBtn.innerText=displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('-');
        break;

    case "x":
        pendingVal=displayVal;
        displayVal="0";
        displayValElementBtn.innerText=displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('*');
        break;

    case "÷":
        pendingVal=displayVal;
        displayVal="0";
        displayValElementBtn.innerText=displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('/');
        break;

    case "=":
        evalStringArray.push(displayVal);
        var evaluation=eval(evalStringArray.join(' '));
        displayVal=evaluation+'';
        displayValElementBtn.innerText=displayVal;
        evalStringArray=[];
        break;

    default:
     break;
            
}


}


for(let i=0; i<calcOperatorBtns.length; i++)
{
calcOperatorBtns[i].addEventListener('click',performOperation,false);
}

clearBtn.onclick=()=>{
    displayVal='0';
    pendingVal=undefined;
    evalStringArray=[];
    displayValElementBtn.innerHTML=displayVal;

}

backspaceBtn.onclick=()=> {
    let lengthOfDisplayVal=displayVal.length;
    displayVal=displayVal.slice(0,lengthOfDisplayVal-1);
    
    if(displayVal==='')
        displayVal='0';
        displayValElementBtn.innerHTML=displayVal;
    
}

decimalBtn.onclick=()=> {
    if(!displayVal.includes('.'))
    displayVal+=".";
    displayValElementBtn.innerText=displayVal;
}