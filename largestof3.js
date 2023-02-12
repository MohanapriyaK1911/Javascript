function largest(){
    var a;
    var b;
    var c;
    a=parseInt(document.getElementById("num1").value);
    b=parseInt(document.getElementById("num2").value);
    c=parseInt(document.getElementById("num3").value);
    if (a>b){
        if(a>c){
            document.getElementById("result").innerHTML="Largest number is "+a;
        }
    }
    else if(b>c){
        document.getElementById("result").innerHTML="Largest number is "+b;
    }    
    else{
        document.getElementById("result").innerHTML="Largest number is "+c;
    }
}
