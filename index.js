const numberEl = document.querySelector('.number');

let number = 0;

//функция отвечающая за прибовление еденици к нашему числу
function numberSum() {
   number++;
   console.log(number);
   numberEl.innerHTML = number;
}



function numberUp4() {
   if(number > -1) {
      setInterval(() => {
         numberSum();
      }, 100)
   } 
   numberEl.innerHTML = number;
}
numberUp4();



