const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "01 janu 2024"

function countdown(){

    const datalanc = new Date(lancamento)
    const hoje = new Date()

    const segtotal = (datalanc - hoje)/1000;

    const finaldias = Math.floor(segtotal / 60 / 60 / 24 );
    const finalhoras = Math.floor(segtotal / 60 / 60 ) % 24;
    const finalminutos = Math.floor(segtotal / 60 ) % 60;
    const finalsegundos = Math.floor(segtotal) % 60;

    dia.innerHTML = formazero(finaldias)
    hora.innerHTML = formazero(finalhoras)
    minuto.innerHTML = formazero(finalminutos)
    segundo.innerHTML =  formazero(finalsegundos)



}

countdown();
setInterval(countdown, 1000)

function formazero(tempo) {

return tempo < 10? `0${tempo}` : tempo;

}