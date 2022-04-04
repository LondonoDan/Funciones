/*
2.	Crear y llamar a una función que recibe 
la velocidad en Km/hora y la muestra en metros/hora y millas/hora.
*/

var kmh = prompt("Ingrese los kilometros por hora");
function convertirkm(){
    return kmh / 1.609;
}
function convertirmilla(){
    return kmh * 1000;
}

alert(convertirkm("El resultado en metros por hora es: "+kmh));
alert(convertirmilla("El resultado en millas por hora es: "+kmh));

