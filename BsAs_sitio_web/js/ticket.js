const precio_inicial = 200;
const estudiante = {descuento:"80%"};
const trainee = {descuento:"50%"};
const junior = {descuento:"15%"};

var categorias = [estudiante, trainee, junior];
/*
function porcentaje_texto_a_decimal(texto){
    extraer del texto el numero // "80%" -> '80'
    dividir el numero por 100 // '80' -> '0.8'
    return ;
}
*/

function calcular_precio(precio, descuento){
    return precio - precio * descuento;
}