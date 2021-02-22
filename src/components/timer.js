// function timerr(interval) {
//   let counter = 0;
//   while(counter < 10000) {
//     setTimeout( function() {
//       console.log( 'Executa infinitamente, 1 vez por segundo.' );
//     }, 1000 );
//     counter += 1000;
//   }
  // for(let i = 0; i < 2000; i+= 500) {
  //   setInterval( function() {
  //     console.log( 'Executa infinitamente, 1 vez por segundo.' );
  //   }, 500 );
  // }
// }

// var counter = 0;
// var timer = setInterval(function() {
//   if( counter >= 10 ) {
//     clearInterval( timer );
//   }
  
//   console.log( counter++ );
// }, 1000);

// console.log(timer);

// var counter = 0;
// function myTimer() {
//   var timer = setTimeout( function() {
//     console.log( counter++ );
//     if( counter < 11 ) {
//       myTimer();
//     }
//   }, 1000 );
// }
  
// myTimer();

setTimeout(() => {
  console.log("time out");
}, 3000)