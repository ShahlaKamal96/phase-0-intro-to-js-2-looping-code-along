// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, eventName){
    const cards = [];
    for(let i=0; i<names.length;i++){
      cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    
    return cards;
}

function countDown(number){
 while(number>=0){
    console.log(number);
    number--;
 }
}

// console.log(writeCards(names,"birthday"));
// countDown(10);