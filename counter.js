let counter = document.querySelector('#counter');
const lowerBtn = document.querySelector('.lowerBtn');
const addCount = document.querySelector('.addCount');

let count=0;

addCount.addEventListener('click',incrementCount);
lowerBtn.addEventListener('click', decrementCount);

function incrementCount(){
    count++;
    counter.innerHTML=count;
    if(counter.innerHTML>0){
        counter.style.color='green';
    }
   
}

function decrementCount(){
    count--;
    counter.innerHTML=count;
    if(counter.innerHTML<0){
        counter.style.color='Red';
    }
}


