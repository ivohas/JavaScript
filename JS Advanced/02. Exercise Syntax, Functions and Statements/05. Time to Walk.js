function walk(steps,lengthForStep,speed ){
let distance= steps*lengthForStep;
let bonusTime=  Math.floor(distance/500);
let speedInMeters= speed/3.6;
let time= (distance/speedInMeters);

let minute= Math.floor(time/60)
let seconds= Math.round(time-(minute*60))
let hours= Math.floor(minute/60)
function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}
minute+=bonusTime;
console.log(`${pad(hours)}:${pad(minute)}:${pad(seconds)}`)
}
walk(4000, 0.60, 5)
walk(2564, 0.70, 5.5)