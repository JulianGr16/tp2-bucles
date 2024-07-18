do{
    const nota = parseInt(prompt('Ingrese su nota:'));
    const letras = '';
    if(nota <= 2){
        alert('su nota es muy deficiente');
    }
    else if(nota <= 4){
        alert('su nota es insuficiente');
    }
    else if(nota <= 6){
        alert('su nota es suficiente');
    }
    else if(nota === 7){
        alert('su nota esta bien');
    }
    else if(nota <= 9){
        alert('su nota es notable');
    }
    else if(nota === 10){
        alert('su nota es sobresaliente');
    }
    else if(nota === 11){
        alert('numero erroneo');
    }
    else if(nota !== letras){
        alert('introduce un numero valido');
    }
}
while(confirm('¿desea continuar?'))

