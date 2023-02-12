function largest(){
    var a;
    var b;
    var c;
    var d;
    a=parseInt(document.getElementById("num1").value);
    b=parseInt(document.getElementById("num2").value);
    c=parseInt(document.getElementById("num3").value);
    d=parseInt(document.getElementById("num4").value);
    lar=(a>b && a>c && a>d)?a:(b>a && b>c && b>d)?b:(c>a && c>b && c>d)?c:d;
    document.getElementById("result").innerHTML=lar+ " is the largest";
}