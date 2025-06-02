// 1. Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function eDataValida(dia, mes, ano) {
    if (mes<0 || mes>12) return false

    const isBisexto = ano%4 === 0;
    diaNoMes = null
    switch(mes) {
        case 1: diaNoMes = 31;
            break;
        case 2: (isBisexto? diaNoMes = 29 : diaNoMes = 28);
            break;
        case 3: diaNoMes = 31;
            break;
        case 4: diaNoMes = 30;
            break;
        case 5: diaNoMes = 31;
            break;
        case 6: diaNoMes = 30;
            break;
        case 7: diaNoMes = 31;
            break;
        case 8: diaNoMes = 31;
            break;
        case 9: diaNoMes = 30;
            break;
        case 10: diaNoMes = 31; 
            break;
        case 11: diaNoMes = 30;
            break;
        case 12: diaNoMes = 31;
            break;
    }

    if (dia<0 || dia>diaNoMes) return false

    return true 
}

console.log(eDataValida(1, 1, 2))