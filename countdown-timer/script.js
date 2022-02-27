const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minsEl=document.getElementById("mins");
const secondEl=document.getElementById("seconds");



const ozanBirth="24 march 2049"

function countDown() {
    const ozanBirthDate=new Date(ozanBirth)
    const currentDate= new Date()

    const totalSeconds= (ozanBirthDate-currentDate)/1000

    const days= Math.floor(totalSeconds/3600 /24)
    const hours= Math.floor(totalSeconds/3600) %24
    const mins= Math.floor(totalSeconds/60) % 60
    const seconds= Math.floor(totalSeconds) % 60

    daysEl.innerHTML=days
    hoursEl.innerHTML=hours
    minsEl.innerHTML=mins
    secondEl.innerHTML=seconds

}

countDown()
setInterval(countDown,1000)