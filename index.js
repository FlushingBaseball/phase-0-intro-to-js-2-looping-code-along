// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }

//   return gifts;
// }

// wrapGifts(gifts);



function writeCards(arrayString, eventName){
  const newArray = [];
for (let i =0; i<arrayString.length; i++){

  newArray.push(`Thank you, ${arrayString[i]}, for the wonderful ${eventName} gift!`);
}
return newArray
};




function countDown(num){
while (num>=0){
  console.log(num)
  num--
}
};