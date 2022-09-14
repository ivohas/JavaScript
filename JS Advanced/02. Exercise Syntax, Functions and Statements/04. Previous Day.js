function priviousDay(year,month,day){
    let days=new Date(year, month-1, 0).getDate();
if(day<=1){
day=days;
month-=1;
}else
{
    day-=1
}
if(month<1){
    year-=1;
    month=12;
}





console.log(`${year}-${month}-${day}`);
}
priviousDay(2022,1,1);