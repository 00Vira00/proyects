//Primero identificamos la caja canvas 
const canvas = document.getElementById("canvas"); 
//Segundo declaramos que el objeto estará en 2 dimensiones
const ctx = canvas.getContext("2d");


//Tercero, damos color,grosor,color de sombra y difuminacion
//Color
ctx.strokeStyle = '#00ffff';
//Grosor
ctx.lineWidth = 10;
//color de la sombra
ctx.shadowColor = '#00ffff';
//difuminación de la sombra (0,100)
ctx.shadowBlur = 20;//Da un efecto de luz muy bueno

/**
 * 
 * @param {Number} degree -- Se espera los grados en degree para pasarlos a radianes
 */
function degToRad(degree) {
    const factor = Math.PI / 180;
    return degree * factor;
}

function renderTime() {
    const now = new Date(); //Fecha y hora actual
    const today = now.toDateString(); // dia de la semana, Mes, numero de mes y año

    const time = now.toLocaleTimeString(); //hora:min:sec
    const hrs = now.getHours();//hora
    const min = now.getMinutes();//min
    const sec = now.getSeconds();//sec
    const mil = now.getMilliseconds();//milisec
    const smoothsec = sec + (mil / 1000); // Lo que se suma por segundos
    const smoothmin = min + (smoothsec / 60); //Lo que se suma por minutos

    //Background
    gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
    gradient.addColorStop(0, "#03303a");
    gradient.addColorStop(1, "black");
    ctx.fillStyle = gradient;
    //ctx.fillStyle = 'rgba(00 ,00 , 00, 1)';
    ctx.fillRect(0, 0, 500, 500);
    //Hours
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRad(270), degToRad((hrs * 30) - 90));
    ctx.stroke();
    //Minutes
    ctx.beginPath();
    ctx.arc(250, 250, 170, degToRad(270), degToRad((smoothmin * 6) - 90));
    ctx.stroke();
    //Seconds
    ctx.beginPath();
    ctx.arc(250, 250, 140, degToRad(270), degToRad((smoothsec * 6) - 90));
    ctx.stroke();
    //Date
    ctx.font = "25px Helvetica";
    ctx.fillStyle = 'rgba(00, 255, 255, 1)'
    ctx.fillText(today, 175, 250);
    //Time
    ctx.font = "25px Helvetica Bold";
    ctx.fillStyle = 'rgba(00, 255, 255, 1)';
    ctx.fillText(time , 220, 290);

}
setInterval(renderTime, 40);