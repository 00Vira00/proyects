"use strict";
//Identifico los elementos de la plantilla html
const contendedor=document.querySelector("div.container");
const clock=document.querySelector("div.clock");
const time=document.querySelector("div.time");
const date=document.querySelector("div.date");

//Obtengo el los datos cada segundo y los escribo en el HTML
setInterval(() => {
    const now=new Date().toISOString();
    const dateNow=now.slice(0,10);
    const timeNow=now.slice(11,19);

    date.innerText=dateNow;
    time.innerText=timeNow;
}, 1000);

