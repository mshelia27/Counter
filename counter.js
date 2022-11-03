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
   counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500, fill:"forwards"});
}

function decrementCount(){
    count--;
    counter.innerHTML=count;
    if(counter.innerHTML<0){
        counter.style.color='Red';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500, fill:"forwards"});
}


