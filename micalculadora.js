function Sumar(a,b){
    return (a+b);
}

function Restar(a,b){
    return (a-b);
}

function Multiplicar(a,b){
    return (a*b);
}

function Dividir(a,b){
    if (b==0){
        return "No se puede dividir por cero";
    }
    else
        return (a/b);      
}

exports.Sumar = sumita
exports.Multiplicar = multi
exports.Restar = resta
exports.Dividir = divi