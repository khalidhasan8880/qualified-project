var digits = document.querySelectorAll('.digit');

var digit = Array.from(digits);


function myFunc(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    h = myFunc(h);
    m = myFunc(m);
    s = myFunc(s);

    if(h>12){
        h = h-12
    }

    function myFunc(value){
        if(value<10){
            value = '0' + value;
        }
        return value;
    }


    digit[0].textContent = h;
    digit[1].textContent = m;
    digit[2].textContent = s;
}



setInterval(myFunc, 1000);
