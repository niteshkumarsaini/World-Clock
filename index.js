



const findCountry=()=>{
 getOptionIndex=document.getElementById('selectOptions').options.selectedIndex;
  getOption=document.getElementsByTagName('option')[getOptionIndex].value;
  var updateHours=0;
  var updateMint=0;
   
  switch(getOption){
case 'India': 
updateHours=5;
updateMint=30;
break;

case 'New York': 
updateMint=0;
updateHours=-5;
break;
case 'London':
  updateHours=0;
  updateMint=0;
   break;

case 'Canada':
  updateHours=-5;
  updateMint=0;

  break;
case 'Switzerland':
  updateHours=1;
  updateMint=0
  break;
default:
updateHours=5;
updateMint=30;

  }
  var date=new Date();
  var year=date.getUTCFullYear();
  var month=date.getUTCMonth()+1;
  var day=date.getUTCDay();
  var date=date.getUTCDate();
  var myday;
  var mymonth;
  switch(day){
    case 1:
      myday="Monday"
    break;
    case 2:
      myday="Tuesday"
    break;
    case 3:
      myday="Wednesday"
    break;
    case 4:
      myday="Thursday"
    break;
    case 5:
      myday="Friday"
    break;
    case 6:
      myday="Saturday"
    break;
    case 7:
      myday="Sunday"
    break;
    default:myday="Not Defined"
    break;
  }
  switch(day){
    case 1:
      mymonth="January"
    break;
    case 2:
      mymonth="February"
    break;
    case 3:
      mymonth="March"
    break;
    case 4:
      mymonth="April"
    break;
    case 5:
      mymonth="May"
    break;
    case 6:
      mymonth="June"
    break;
    case 7:
      mymonth="July"
    break;
    case 8:
      mymonth="August"
    break;
    case 9:
      mymonth="September"
    break;
    case 10:
      mymonth="October"
    break;
    case 11:
      mymonth="November"
    break;
    case 12:
      mymonth="December"
    break;
    default:mymonth="Not Defined";

    
 
  }


  document.getElementById('td-date').innerHTML=`Today is ${date} of ${mymonth} ${year} and Country is ${getOption}`;


id=setInterval(()=>{
  var date=new Date();
  var Mydata={
 
  hours:date.getUTCHours()+updateHours,
    mins:date.getUTCMinutes()+updateMint,
    sec:date.getUTCSeconds()

}
// console.log(Mydata)
var displayhour=0;
var displaymins=0;
if(Mydata.mins>59){
  displaymins=Mydata.mins-60;
  Mydata.hours++;

}
else{
  displaymins=Mydata.mins;
}
var meridiem="AM";
switch(Mydata.hours){
  case 25:displayhour=1;
  break;
  case 26:displayhour=2;
  break;
  case 27:displayhour=3;
  break;
  case 28:displayhour=4;
  break;
  case 29:displayhour=5;
  break;
  case 30: displayhour=6;
  break;
  default:
    displayhour=Mydata.hours;
    break;
}

switch(displayhour){
  case 13:displayhour=1
  meridiem="PM";
  break;
  case 14:displayhour=2
  meridiem="PM";
  break;
  case 15:displayhour=3
  meridiem="PM";
  break;
  case 16:displayhour=4
  meridiem="PM";
  break;
  case 17:displayhour=5
  meridiem="PM";
  break;
  case 18:displayhour=6
  meridiem="PM";
  break;
  case 19:displayhour=7
  meridiem="PM";
  break;
  case 20:displayhour=8
  meridiem="PM";
  break;
  case 21:displayhour=9
  meridiem="PM";
  break;
  case 22:displayhour=10
  meridiem="PM";
  break;
  case 23:displayhour=11
  meridiem="PM";
  break;
  case 24:displayhour=12
  meridiem="PM";
  break;
default:displayhour;
meridiem;
}

if(displayhour<10 && displaymins<10 && Mydata.sec<10){

  document.getElementById('displayTime').innerText=`0${displayhour}:0${displaymins}:0${Mydata.sec} ${meridiem}`;
}
else if(displayhour<10 && displaymins<10){
  document.getElementById('displayTime').innerText=`0${displayhour}:0${displaymins}:${Mydata.sec} ${meridiem}`;

}
else if(displayhour<10 && Mydata.sec<10){
  document.getElementById('displayTime').innerText=`0${displayhour}:${displaymins}:0${Mydata.sec} ${meridiem}`;

}
else if(displaymins<10 && Mydata.sec<10){
  document.getElementById('displayTime').innerText=`${displayhour}:0${displaymins}:0${Mydata.sec} ${meridiem}`;
}
else if(displayhour<10 ){
  document.getElementById('displayTime').innerText=`0${displayhour}:${displaymins}:${Mydata.sec} ${meridiem}`;
}
else if(displaymins<10 ){
  document.getElementById('displayTime').innerText=`${displayhour}:0${displaymins}:${Mydata.sec} ${meridiem}`;
}
else if(Mydata.sec<10 ){
  document.getElementById('displayTime').innerText=`${displayhour}:${displaymins}:0${Mydata.sec} ${meridiem}`;
}
else{
  document.getElementById('displayTime').innerText=`${displayhour}:${displaymins}:${Mydata.sec} ${meridiem}`;
}

 



},1000)
}

getOptionIndex=document.getElementById('selectOptions').addEventListener(('change'),()=>{
  clearInterval(id);
})

findCountry();


