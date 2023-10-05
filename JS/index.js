//Primera pre entrega de CoderHouse 

document.addEventListener('DOMContentLoaded', () => {

    function promedioYpar() {

        let arr = [];
        let total = 0;

        for (let i = 0; arr.length < 10; i++) {

            let numbers = [];

            numbers = Number(prompt('Ingrese 10 numeros para calcular el promedio'));
            arr.push(numbers);

            total += arr[i];

        };

        let promedio = total / 2;

        alert(promedio);

        if (promedio % 2 === 0) {

            return alert('El valor promedio es par');

        } else {

            return alert('El valor promedio no es par')

        };

        ClearArray();
    }




    function ClearArray() {

        arr = [];
        total = 0;
    };

    promedioYpar();

});

