let body = document.querySelector('body')
        setInterval(()=>{
            let date = new Date();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let sec = date.getSeconds();
            console.log(`${hour} : ${minute} : ${sec}`)
            let clockHour = document.querySelector('.clock-hour');
            let clockMin = document.querySelector('.clock-minute');
            let clockSec = document.querySelector('.clock-sec');
            
            if(hour > 18){
                body.classList.add('active');
            } else if(hour > 0 && hour < 6){
                body.classList.add('active');
            }else{
                body.classList.remove('active');
            }
            hour = (hour > 12) ? hour - 12 : hour;

            if(sec == 0){
                clockSec.style.transition = `0s`
            }else if(sec != 0){
                clockSec.style.transition = `0.5s`
            }

            if(minute == 0){
                clockMin.style.transition = `0s`
            }else if(minute != 0){
                clockMin.style.transition = `0.5s`
            }

            if(hour == 12 || hour == 0){
                clockHour.style.transition = `0s`
            }else {
                clockHour.style.transition = `0.5s`
            }

            clockHour.style.transform = `rotate(${(hour) * 30}deg)`
            clockMin.style.transform = `rotate(${(minute) * 6}deg)`
            clockSec.style.transform = `rotate(${(sec) * 6}deg)`
        },1000)
