const getSleepHours = day => {
  if(day === 'monday'){
    return 8;
  }else if(day === 'tuesday'){
    return 8;
  }else if(day === 'wednesday'){
    return 8;
  }else if(day === 'thursday'){
    return 8;
  }else if(day === 'friday'){
    return 8;
  }else if(day === 'saturday'){
    return 10;
  }else if(day === 'sunday'){
    return 10;
  }else {
    return 'Error!';
  }   
}
const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')};
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours){
    console.log('You have a perfect amount of sleep!');
  }else if(actualSleepHours > idealSleepHours){
    console.log('You have more sleep than needed!');
  }else 
    console.log('You should have some rest, take a nap now!');
   if((idealSleepHours - actualSleepHours) < 0){
     return console.log('you are a groundhog');
   }else {
     return console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. take a nap, now!.');
   }
   
}
  

calculateSleepDebt();