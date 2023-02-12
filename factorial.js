function fact(){
    var n,i,fact=1;
    n=parseInt(document.getElementById("num1").value);
    for(i=n;i>=1;i--){
        fact=fact*i;
    }
    document.getElementById("result").innerHTML="Factorial of "+ n +" is "+ fact
}