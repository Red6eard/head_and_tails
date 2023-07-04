const input = document.getElementById('numOfAttempts');
let numOfMinRender = document.getElementById('numOfMin');
let numOfMaxRender = document.getElementById('numOfMax');
let numOfMidRender = document.getElementById('numOfMid')



let start = (count) => {
  let min = 0;
  let max = 0;
  
  for (var i = 0; i < count; i++) {
    let randomNum = Math.floor(Math.random() * 100) ;
    while(randomNum === 50) {
      randomNum = Math.floor(Math.random() * 100) ;
    };
    
    if (randomNum < 50) {
      min ++
    } else {
      max ++
    }
  };
  numOfMaxRender.innerHTML = `Орел: ${max}`;
  numOfMinRender.innerHTML = `Решка: ${min}`;
};


