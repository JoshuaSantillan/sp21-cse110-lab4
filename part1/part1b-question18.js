function getTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

const currentTime = setInterval(getTime, 1000);
