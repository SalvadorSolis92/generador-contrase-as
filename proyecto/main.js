let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){

    let numeroDigitado = parseInt(cantidad.value);
    let password = '';  

    if (cantidad.value < 8) {
        alert('La longitud de la contraseña debe ser mayor a 8 caracteres');
    }else{

        for(let i = 0; i < numeroDigitado; i++){
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            password += caracterAleatorio;
        }

        console.log('pasword generado ' + password);
        contrasena.value = password;
    } 

    
}





