function Time() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(Time, 1000);