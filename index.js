function amtChange(){
    document.getElementById("txtamt").value = document.getElementById("rangeamt").value;
}
function yrChange(){
    document.getElementById("txtyear").value = document.getElementById("rangeyr").value;
}
function intChange(){
    document.getElementById("txtint").value = document.getElementById("rangeint").value;
}

function txtamtchange(){
    document.getElementById("rangeamt").value = document.getElementById("txtamt").value; 
}
function txtyearchange(){
    document.getElementById("rangeyr").value = document.getElementById("txtyear").value;
}
function txtintchange(){
    document.getElementById("rangeint").value = document.getElementById("txtint").value;
}

function calclick(){
    var p = parseInt(document.getElementById("txtamt").value);
    var r = parseFloat(document.getElementById("rangeint").value)/12/100;
    var n = parseInt(document.getElementById("rangeyr").value)*12;

    var emi = p*r*Math.pow(1+r, n) / (Math.pow(1+r, n) -1);

    document.getElementById("result").innerHTML=`Your monthly EMI will be <span style="color:green; font-weight:bold;">&#8377; ${Math.round(emi)} </span> for ${p} amount in ${n/12} years.`
}