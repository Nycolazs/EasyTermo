if (localStorage.getItem('reload') == null) {
    localStorage.clear();
    localStorage.setItem('reload', 'true');
    location.reload(true);
} else {
    for (const property in localStorage) {
        if(isUpperCase(property)){
            localStorage.removeItem('reload');  
            for(var i = 0; i < property.length; i++){
                getDivByLetter(property[i]);
            }
        }
    }
}

function getDivByLetter(letter){
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].textContent == letter) {
            console.log(divs[i]);
            divs[i].click();
            setTimeout(clicaEnter, 200);
        }
    }
}

function clicaEnter(){
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].textContent == "Enter") {
            divs[i].click();
        }
    }
}

function isUpperCase(str) {
    return str === str.toUpperCase();
}