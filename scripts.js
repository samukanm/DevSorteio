function generateNumber() {
    const min = Math.ceil(document.getElementById("min").value);
    const max = Math.floor(document.getElementById("max").value);

    if (min >= max) {
        alert("O valor mínimo tem que ser menor que o valor máximo");
    } else {
        const result = Math.floor(Math.random() * (max - min) + min);
        document.getElementById("result").innerText = `Número sorteado: ${result}`;
    }
}
