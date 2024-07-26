function add(){
    let Value1=Number(document.getElementById('v1').value);
    let Value2=Number(document.getElementById('v2').value);
    var sum=Value1+Value2;

    document.getElementById('a1').value=sum;

}
function sub(){
    let Value1=Number(document.getElementById('v1').value);
    let Value2=Number(document.getElementById('v2').value);
    var sub=Value1-Value2;

    document.getElementById('a1').value=sub;

}
function mul(){
    let Value1=Number(document.getElementById('v1').value);
    let Value2=Number(document.getElementById('v2').value);
    var mul=Value1*Value2;

    document.getElementById('a1').value=mul;

}
function div(){
    let Value1=Number(document.getElementById('v1').value);
    let Value2=Number(document.getElementById('v2').value);
    var div=Value1/Value2;
    document.getElementById('a1').value=div;

}
