/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. */

var input = document.querySelector("textarea");
    input.focus();

    function mostrar() {
        div = document.getElementById('areacifrado');
        div.style.display = 'flex';
    }

    function ocultar() {
        div = document.getElementById('areaencriptado');
        div.style.display = 'none';
    }

    function encriptar() {
        var textoEncriptado = input.value;
        
        textoEncriptado = textoEncriptado.replaceAll('e', 'enter');
        textoEncriptado = textoEncriptado.replaceAll('i', 'imes');
        textoEncriptado = textoEncriptado.replaceAll('a', 'ai');
        textoEncriptado = textoEncriptado.replaceAll('o', 'ober');
        textoEncriptado = textoEncriptado.replaceAll('u', 'ufat');
        console.log(textoEncriptado);

        document.getElementById("mensajecifrado").innerHTML = textoEncriptado;
        document.getElementById("copiar").innerHTML = "Copiar";
        mostrar();
        ocultar();
        input.value = "";
        }
    
    function desencriptar() {

        var textoDesencriptado = input.value;

        textoDesencriptado = textoDesencriptado.replaceAll('enter', 'e');
        textoDesencriptado = textoDesencriptado.replaceAll('imes', 'i');
        textoDesencriptado = textoDesencriptado.replaceAll('ai', 'a');
        textoDesencriptado = textoDesencriptado.replaceAll('ober', 'o');
        textoDesencriptado = textoDesencriptado.replaceAll('ufat', 'u');
        console.log(textoDesencriptado);
        document.getElementById("mensajecifrado").innerHTML = textoDesencriptado;
        document.getElementById("copiar").innerHTML = "Copiar";
        mostrar();
        ocultar();
        input.value = "";
    }  

    function copiarTexto(){
        var codigoACopiar = document.getElementById('mensajecifrado');
        navigator.clipboard.writeText(codigoACopiar.innerHTML);
        document.getElementById("copiar").innerHTML = '¡COPIADO!'; 
    }

    var button = document.querySelector(".encriptar");
    button.onclick = encriptar;

    var button = document.querySelector(".desencriptar");
    button.onclick = desencriptar;

    var button = document.querySelector(".copiar");
    button.onclick = copiarTexto;
