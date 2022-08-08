let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegister = false;
const runnerAge=21;
if (runnerAge>18 && earlyRegister===true) {
 raceNumber+=1000
}
if (raceNumber>1000) {
  console.log (`'Dear Runner, you\'ll race at 9:30 am! Your race number is ${raceNumber}'`);
}
else if (runnerAge>18 && !earlyRegister) {
   console.log (`'Dear Runner, you\'ll race at 11:00 am! Your race number is ${raceNumber}'`);
}
else if (runnerAge<18) {
   console.log (`'Dear Runner, you\'ll race at 12:30 pm! Your race number is ${raceNumber}'`);
}
else  {
  console.log( 'Dear Runner, you should visit the information desk!')
}
