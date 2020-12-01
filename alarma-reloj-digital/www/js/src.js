"use strict";
//Identifico los elementos de la plantilla html
const contendedor = document.querySelector("div.contendedor");
const clock = document.querySelector("div.clock");
const time = document.querySelector("div.time");
const date = document.querySelector("div.date");
const buttonPutAlarm = document.querySelector("form button.setAlarm");
const form = document.querySelector("form")
const buttonInputAlarm = document.querySelector("form button.buttonInputAlarm")
const buttonStopAlarm=document.querySelector("form button.stop")
let alarm;

//Obtengo el los datos cada segundo y los escribo en el HTML
setInterval(() => {
    const localAlarm = localStorage.getItem("ALARM");

    const now = new Date().toISOString();
    const dateNow = now.slice(0, 10);
    const timeNow = now.slice(11, 19);

    date.innerText = dateNow;
    time.innerText = timeNow;
console.log(Date.parse(localAlarm));
    //Compruebo cuando suena la alarma y almaceno el resultado en local store!!
if (Date.parse(alarm)<Date.parse(now)){
    const alarmAsString = JSON.stringify(alarm);
    localStorage.setItem("ALARM", alarmAsString);
    console.log("Alarm!!");
    stopalarm();
    
}
}, 1000);

//Al pulsar button debe aparecer la opción de seleccionar hora
//Una vez seleccionada se vuelve a pulsar al boton para poner la alarma
//Si la alarma está activada, debe aparecer un boton de cancel alarm y 
//un icono de campana diciendo que está puesta



buttonPutAlarm.addEventListener("click", (e) => {
    e.preventDefault();
    buttonPutAlarm.style.display = "none";
    console.log("pulsando el boton");
    const labelInput = document.createElement("label");
    labelInput.setAttribute("for", "datetime-local");

    const input = document.createElement("input");
    input.setAttribute("type", "datetime-local");
    input.setAttribute("id", "datetime-local");
    input.setAttribute("name", "datetime-local");


    //Introduzco los elementos de forma flex-column
    form.append(labelInput);
    form.append(input);
    form.append(buttonInputAlarm);
    buttonPutAlarm.setAttribute("hidden", true);
    input.required = true;


    buttonInputAlarm.hidden = false;
    buttonPutAlarm.hidden = true;

});

buttonInputAlarm.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector("input")
    alarm = (input.value);
    localStorage.setItem("ALARM", JSON.stringify(alarm));//Aquí almaceno la alarma
    console.log("pulso el otro botón");
    buttonPutAlarm.style.display = "grid";
    
    buttonInputAlarm.setAttribute("hidden", true);
    form.removeChild(input)
});

function stopAlarm() {
    
}