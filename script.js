let card=document.querySelectorAll(".card");
let arr=Array.from(card);
let x = 0 ;

arr.forEach(el => {
    el.addEventListener("click",()=>{
        el.classList.add('is-flip');
        let allflipped=arr.filter(flipped => flipped.classList.contains("is-flip"));
        console.log(allflipped[0])
        if (allflipped.length === 2) {
            
            stop();
            same(allflipped[0],allflipped[1]);
            
        }
    })});
function same(el1,el2) {
    if (el1.firstChild.src !== el2.firstChild.src) {
        x += 1 ;
        let tries = document.querySelector("#tries").innerHTML=x;
        setTimeout(()=>{
            el1.classList.remove("is-flip");
            el2.classList.remove("is-flip");
            
        },duration)
    }else{
        el1.classList.remove("is-flip");
        el2.classList.remove("is-flip");
        el1.classList.add("same");
        el2.classList.add("same");
    }
}
function stop() {
    card.forEach(el => {
        el.classList.add("event");
        setTimeout(()=>{
            console.log("wiiiw")
            el.classList.remove("event");    
        },duration)
    });
}

let duration=1000;
let orderrange=[...Array(arr.length).keys()];
shuffle(orderrange);
console.log(orderrange)
arr.forEach((el,index)=>{
    el.style.order=orderrange[index];
})
function shuffle(array) {
    let current=array.length;
    let temp;
    let random;
    while (current>0) {
        random=Math.floor(Math.random()*current);
        current-- ;
        temp=array[current];
        array[current] = array[random];
        array[random]=temp;
    }
    return array;
}
