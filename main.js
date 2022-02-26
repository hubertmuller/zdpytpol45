// komentarz jednoliniowy
/*
wieloniowy
komentarz
*/

window.addEventListener('DOMContentLoaded', function () {

    console.log('dokumnet gotowy');

    document.forma.addEventListener('submit', (target) => {

        let imie = document.forma.imie;
        let imieErrorElement = document.querySelector('[for="imieid"] span');
        //sprawdzamy imie
        if (imie.value.match(/^([A-z\-]{3,})$/g)) {
            imieErrorElement.classList.remove('wystapil');
        } else {
            imieErrorElement.classList.add('wystapil');
            target.preventDefault();
        }


    } ); 

} )

console.log('poczatek');

function zmien(rozmiar) {
    /* !== sprawdzenie razem z typem
    * != bez typu
    */
    if (rozmiar != 0) {
        var el = document.querySelector('html');
        el.style.fontSize = rozmiar;
    } else if (false) {
        // dodatkowy warunek
    } else {
        console.log('nie mozna zmniejszyc do zera');
    }

    //switch
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#switch_statement
}




/*

let x = 0;
while (x < 5) {
    x++;
    console.log('hej');
}

let x = 0;
do {
    x++;
    console.log('hej')
} while (x < 5);


function y() {
    // sprobuj z let
    for (var x = 5; x < 10; x++) {
        console.log(x);
    };
    console.log(x);
}

var obj = {
    x: "tekst",
    y: 45,
    f: function() {
        console.log('hej');
    }
}
obj.f();

var x = [ "test", 5, true, { a: [ 1, 3, "ala"]}, function(t) { return t + 5; } ];
x[4](6);

*/