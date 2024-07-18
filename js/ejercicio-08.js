let numero = parseInt(prompt('ingrese un numero'));

for(let i = 30; i >= numero; numero++){
    document.write(numero.toString().repeat(numero) + '<br>');
}