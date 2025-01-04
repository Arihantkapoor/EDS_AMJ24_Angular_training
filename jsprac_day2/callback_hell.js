
const sample1 = document.querySelector('.sample1');
const sample2 = document.querySelector('.sample2');
const sample3 = document.querySelector('.sample3');

const sample4 = document.querySelector('.sample4');
const sample5 = document.querySelector('.sample5');
const sample6 = document.querySelector('.sample6');

const sample7 = document.querySelector('.sample7');
const sample8 = document.querySelector('.sample8');
const sample9 = document.querySelector('.sample9');
const sample10 = document.querySelector('.sample10');

setTimeout(()=>{
    sample1.textContent = '1';
    sample1.style.color = 'red';
    setTimeout(() => {
        sample2.textContent = '2';
        sample2.style.color = 'green';
        setTimeout(() => {
            sample3.textContent = '3';
            sample3.style.color = 'blue';
            setTimeout(() => {
                sample4.textContent = '4';
                sample4.style.color = 'red';
                setTimeout(() => {
                    sample5.textContent = '5';
                    sample5.style.color = 'green';
                    setTimeout(() => {
                        sample6.textContent = '6';
                        sample6.style.color = 'purple';
                        setTimeout(() => {
                            sample7.textContent = '7';
                            sample7.style.color = 'pink';
                            setTimeout(() => {
                                sample8.textContent = '8';
                                sample8.style.color = 'orange';
                                setTimeout(() => {
                                    sample9.textContent = '9';
                                    sample9.style.color = 'violet';
                                    setTimeout(() => {
                                        sample10.textContent = '10';
                                        sample10.style.color = 'brown';
                                    }, 10000);
                                }, 9000);
                            }, 8000);
                        }, 7000);
                    }, 6000);
                }, 5000);
            }, 4000);
        }, 3000);
    }, 2000);
},1000)



