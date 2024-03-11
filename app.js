let copiado = document.querySelector(".bloquedesbloquear")

const botonencriptar=document.querySelector(".encriptar");
const desencriptar = document.querySelector(".desencriptar")
const txtencriptar=document.querySelector(".encriptacion");
const aviso= document.querySelector(".textoaviso");
const encriptado= document.querySelector(".textocodi");
const imagen= document.querySelector(".contenedor");
const copiar= document.querySelector(".copiar")

botonencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto=txtencriptar.value;
        let txt=texto.normalize("NFD").replace(/[$+\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`´;,\u0300-\u036f']/g, " " );
    

    if(texto == ""){
        aviso.style.background="#0A3871";
        aviso.style.color="#FFFF";
        aviso.style.fontWeight="800"
        aviso.textContent="El campo de Texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style")
        },300);
    }
    else if(texto !== txt){
        aviso.style.background="#0A3871";
        aviso.style.color="#FFFF";
        aviso.style.fontWeight="800"
        aviso.textContent="No se aceptarán mayúsculas ni caracteres especiales.";

        setTimeout(()=>{
            aviso.removeAttribute("style")
        },300);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background="#0A3871";
        aviso.style.color="#FFFF";
        aviso.style.fontWeight="800"
        aviso.textContent="El texto debe ser todo en minúscula";

        setTimeout(()=>{
            aviso.removeAttribute("style")
        },300);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

            encriptado.innerHTML = texto;
            imagen.remove();
            copiar.style.visibility= "inherit"
    }    
})

//copiado de texto encriptado
copiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = encriptado;
    copiar.select();
    document.execCommand("copy");
copiado.classList.add("active");
window.getSelection().removeAllRanges();
setTimeout(function(){
    copiado.classList.remove("active");
},1500)

});

//desencriptar

desencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto=txtencriptar.value;
        let txt=texto.normalize("NFD").replace(/[$+\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`´;,\u0300-\u036f']/g, " " );
    console.log(txt);

if(texto == ""){
    aviso.style.background="#0A3871";
    aviso.style.color="#FFFF";
    aviso.style.fontWeight="800"
    aviso.textContent="El campo de Texto no debe estar vacio";

    setTimeout(()=>{
        aviso.removeAttribute("style")
    },300);
}
else if(texto !== txt){
    aviso.style.background="#0A3871";
    aviso.style.color="#FFFF";
    aviso.style.fontWeight="800"
    aviso.textContent="No se aceptarán mayúsculas ni caracteres especiales.";

    setTimeout(()=>{
        aviso.removeAttribute("style")
    },300);
}

else if(texto !== texto.toLowerCase()){
    aviso.style.background="#0A3871";
    aviso.style.color="#FFFF";
    aviso.style.fontWeight="800"
    aviso.textContent="El texto debe ser todo en minúscula";

    setTimeout(()=>{
        aviso.removeAttribute("style")
    },300);
}

else{
    texto = texto.replace(/enter/mg, "e");
    texto = texto.replace(/imes/mg, "i");
    texto = texto.replace(/ai/mg, "a");
    texto = texto.replace(/ober/mg, "o");
    texto = texto.replace(/ufat/mg, "u");

        encriptado.innerHTML = texto;
        imagen.remove();
        copiar.style.visibility= "inherit"
}    
})

