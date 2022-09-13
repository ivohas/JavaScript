function mathSolve(num1,num2,operator){
    let a;
switch(operator)
{
case'+':
a=num1+num2;
break;
case'-':
a= num1-num2;
break;
case'*':
a=num1*num2;
break;
case'**':
a= num1**num2;
break;
case'/':
a= num1/num2;
break;
case'%':
a= num1%num2;
break;

}
console.log(a);
}