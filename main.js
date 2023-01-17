let num= 0;

document.getElementById('contador').addEventListener('click', () => {
    num += 1;
    document.getElementById('numero').value = num;
})

document.getElementById('limpiar').addEventListener('click',() => {
    num = 0
    document.getElementById('numero').value = num;
})