const Horas = document.getElementById('horas');
const Minutos = document.getElementById('minutos')
const Segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minutos = dateToday.getMinutes();
    let segundos = dateToday.getSeconds();

    Horas.textContent = hora < 10 ? '0' + hora : hora;
    Minutos.textContent =  minutos < 10 ? '0' + minutos : minutos;
    Segundos.textContent = segundos < 10 ? '0' + segundos : segundos;
});


// how the screch day for js ?
