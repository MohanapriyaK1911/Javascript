function mathop(){
    var n1;
    var n2;
    var n3;
    var n4,n5,n6,n7;
    n1=parseInt(document.getElementById("num1").value);
    n2=parseInt(document.getElementById("num2").value);
    n3=parseInt(document.getElementById("num3").value);
    switch(n3){
        case 1:
            n4=n1+n2;
            document.getElementById("result").innerHTML="Addition of "+n1+" and "+n2+" is " +n4;
        break;
        case 2:
            n4=n1-n2;
            document.getElementById("result").innerHTML="Subtraction of "+n1+" and "+n2+" is " +n4;
        break;
        case 3:
            n4=n1*n2;
            document.getElementById("result").innerHTML="Multiplication of "+n1+" and "+n2+" is " +n4;
            break;
        case 4:
            n4=n1/n2;
            document.getElementById("result").innerHTML="Division of "+n1+" and "+n2+" is " +n4;
        break;
        default:
            document.getElementById("result").innerHTML="Invalid Input";
    }
}