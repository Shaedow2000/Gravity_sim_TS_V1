"use strict";
let obj = document.getElementById('obj');
let v = 0;
let interval = 500;
let fall = () => {
    obj.style.top = `${v}%`;
    v += 0.25;
    if (v === 35) {
        interval -= 27.5;
    }
    else if (v === 40) {
        interval -= 30;
    }
    else if (v === 50) {
        interval -= 32.5;
    }
    else if (v === 75) {
        interval -= 35;
    }
    else {
        interval -= 25;
    }
    clearInterval(fallInterval);
    fallInterval = setInterval(fall, interval);
    if (v >= 100) {
        clearInterval(fallInterval);
    }
};
let fallInterval = setInterval(fall, interval);
//# sourceMappingURL=index.js.map