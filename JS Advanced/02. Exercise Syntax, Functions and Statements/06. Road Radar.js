function radar(speed,zone){
let maxSpeed=0;
switch(zone){
case"motorway":
maxSpeed=130;
break;
case"city":
maxSpeed=50;
break;
case"interstate":
maxSpeed=90;
break;
case"residential":
maxSpeed=20;
break;
}
if(maxSpeed>=speed){
    console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`)
}else{
    let speeding=speed-maxSpeed
    let status=undefined
    if(speeding<=20){
        status="speeding"
    }else if(speeding> 20&&speeding<=40){
        status="excessive speeding"
    }
    else
    {
        status= 'reckless driving';
    }
    console.log(`The speed is ${speed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`)
}
}
radar(40, 'city')
radar(120, 'interstate')