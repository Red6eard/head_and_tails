const input = document.getElementById('numOfAttempts');
let numOfMinRender = document.getElementById('numOfMin');
let numOfMaxRender = document.getElementById('numOfMax');




const start = (count) => {
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
  numOfMaxRender.innerHTML = `<img src="images/IMG_7620.png" alt="heads" class="coin" /><span>: ${max}</span>`;
  numOfMinRender.innerHTML = `<img src="images/IMG_7619.png" alt="tails" class="coin" /><span>: ${min}</span>`;
};
