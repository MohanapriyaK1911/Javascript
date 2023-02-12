function sum(){
    var n,sum=0;
    n=parseInt(document.getElementById("num1").value);
    for(i=1;i<=n;i++){
        sum=sum+i;
    }
    document.getElementById("result").innerHTML="Sum of first "+ n +" number is "+ sum
}