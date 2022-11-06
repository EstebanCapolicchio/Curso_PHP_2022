//Variables ------------------------------------------------//

const precio_inicial = 200;

const estudiante = {nombre:"Estudiante", descuento:"80%"};
const trainee = {nombre:"Trainee", descuento:"50%"};
const junior = {nombre:"Junior", descuento:"15%"};

var categorias = [estudiante, trainee, junior];

//Variables Modificando HTML--------------------------------//

let cartas_con_descuento = document.getElementById('categorias');

for(let i=0; i < cartas_con_descuento.children.length; i++){
    let auxiliar = cartas_con_descuento.children[i].getElementsByTagName("h5");
    auxiliar[0].innerHTML = categorias[i].nombre;
    auxiliar[1].innerHTML = categorias[i].descuento;
}

let precio_general = document.getElementById('precio_general');
let texto_precio_general = precio_general.getElementsByTagName("h3")[0].innerHTML;
precio_general.getElementsByTagName("h3")[0].innerHTML = texto_precio_general + precio_inicial;

//Validaciones --------------------------------------------//

function validar_nombre(nombre){
    let patron=/^[a-zA-Z ]+$/;
    if(nombre.value.match(patron)){
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
        return true;
    }
    else{
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
        return false;
    }
}

function validar_apellido(apellido){
    let patron=/^[a-zA-Z ]+$/;
    if(apellido.value.match(patron)){
        apellido.classList.remove("is-invalid");
        apellido.classList.add("is-valid");
        return true;
    }
    else{
        apellido.classList.remove("is-valid");
        apellido.classList.add("is-invalid");
        return false;
    }
}

function validar_email(email){
    let patron=/[a-zA-Z ]*(@gmail.com|@hotmail.com|@yahoo.com)/;
    if(email.value.match(patron)){
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        return true;
    }
    else{
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        return false;
    }
}

function validar_cantidad(cantidad){
    let patron=/^[0-9]+$/;
    if(cantidad.value.match(patron)){
        cantidad.classList.remove("is-invalid");
        cantidad.classList.add("is-valid");
        return true;
    }
    else{
        cantidad.classList.remove("is-valid");
        cantidad.classList.add("is-invalid");
        return false;
    }
}

function validar_inputs(nombre, apellido, email, cantidad){
    let aux_nombre = validar_nombre(nombre);
    let aux_apellido = validar_apellido(apellido);
    let aux_email = validar_email(email);
    let aux_cantidad = validar_cantidad(cantidad);
    return aux_nombre && aux_apellido && aux_email && aux_cantidad;
}

//----------------------------------------------------------//

function porcentaje_texto_a_decimal(texto){
    let aux_num = parseInt(texto, 10);//extraer del texto el numero // "80%" -> '80'
    if(aux_num!=NaN && aux_num >= 0 && aux_num <= 100){
        return aux_num / 100;// devuelve numero entre 0 y 1// '80' -> '0.8'
    }
    else{
        return 0;
    }
}

function calcular_precio(precio, descuento){
    return precio * (1 - descuento);
}

function resumen_compra(){
    let nombre = document.getElementsByClassName("form-control")[0];
    let apellido = document.getElementsByClassName("form-control")[1];
    let email = document.getElementsByClassName("form-control")[2];
    let cantidad = document.getElementsByClassName("form-control")[3];

    if(validar_inputs(nombre, apellido, email, cantidad)){
        let descuento_a_aplicar = "0%";
        for(let i=0; i<categorias.length; i++){
            if(categorias[i].nombre == document.getElementsByClassName("form-select")[0].value){
                descuento_a_aplicar = categorias[i].descuento;
                break;
            }
        }
        let aux_descuento_a_aplicar = porcentaje_texto_a_decimal(descuento_a_aplicar);
        let precio_total = calcular_precio(precio_inicial * cantidad.value, aux_descuento_a_aplicar);
        document.getElementById("texto_resumen_compra").children[0].innerHTML = "Total a Pagar: $" + Math.round(precio_total);
    }
}
/*
function tester_formulario(){
    document.getElementsByClassName("form-control")[0].value = "Fulanito";
    document.getElementsByClassName("form-control")[1].value = "Fulannino";
    document.getElementsByClassName("form-control")[2].value = "Fula@gmail.com";
    document.getElementsByClassName("form-control")[3].value = "2";
}
tester_formulario();
*/

function borrar_compra(){
    document.getElementsByClassName("form-control")[0].value = "";
    document.getElementsByClassName("form-control")[1].value = "";
    document.getElementsByClassName("form-control")[2].value = "";
    document.getElementsByClassName("form-control")[3].value = "";
}

document.getElementById("comprar").addEventListener("click", resumen_compra);
document.getElementById("borrar").addEventListener("click", borrar_compra);
