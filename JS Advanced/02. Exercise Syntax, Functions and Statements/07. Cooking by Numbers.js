function cooking(num, coomand1,coomand2,coomand3,coomand4,command5){
let number= num;
let arrey= [coomand1,coomand2,coomand3,coomand4,command5];
for(let command of arrey)
{
switch(command){

case"chop":
number=number/2;
break;
case'dice':
let a= Math.sqrt(number);
number=a
break;
case'spice':
number++
break;
case'bake':
number= number*3;
break;
case'fillet':
number= number-number/5;
break;
}
console.log(number);


}

}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')