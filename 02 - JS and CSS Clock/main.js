const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;

    const minutes = now.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90;

    const hours = now.getHours();
    const hoursDeg = ((hours / 12) * 360) + 90;


    secondHand.style.transform= `rotate(${secondsDeg}deg)`
    minuteHand.style.transform= `rotate(${minutesDeg}deg)`
    hourHand.style.transform= `rotate(${hoursDeg}deg)`
}

setInterval(setDate, 1000)