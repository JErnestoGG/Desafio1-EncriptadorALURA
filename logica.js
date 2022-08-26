var miTexto=document.querySelector("textarea");   /*Enlazando el elemento txtarea a una variable  */
miTexto.focus();                                  /* Colocando el cursor en el txtarea */

         function obtenerTexto() {                      /*Recupera el valor de la variable enlazada a txtarea  */
                return miTexto.value.toLocaleLowerCase();
         }


        function codificarTexto(mensaje) {          /* Funcion que recibe el mensaje y evalua las letras */
            var texto=mensaje;
            var arrayTexto=Array.from(texto);
            var textoResultado="";

            for (let i = 0; i < arrayTexto.length; i++) {
                        
                    if (arrayTexto[i]=="a") {
                        textoResultado+="ai";
                    }
                    else if (arrayTexto[i]=="e") {
                        textoResultado+="enter";
                    }
                    
                    else if (arrayTexto[i]=="i") {
                        textoResultado+="imes";

                    }
                    else if (arrayTexto[i]=="o") {
                        textoResultado+="ober";
                    }
                    else if (arrayTexto[i]=="u") {
                        textoResultado+="ufat";
                    } else{
                        textoResultado+=arrayTexto[i];
                    }      
                    
            }
            return textoResultado;                  /*Devuelve el valor de la conversion de letras */
        } 
        
 
        function descodificarTexto(mensaje) {       /*Recibe el mensaje y evalua la primera letra y aumenta   */
            var texto=mensaje;                       /*posiciones de i para no escribir las que siguen a la vocal  */
            var arrayTexto=Array.from(texto);
            var textoResultado="";

            for (let i = 0; i < arrayTexto.length; i++) {
                        
                    if (arrayTexto[i]=="a") {
                        textoResultado+="a";
                        i=i+1;
                    }
                    else if (arrayTexto[i]=="e") {
                        textoResultado+="e";
                        i=i+4;
                    }
                    
                    else if (arrayTexto[i]=="i") {
                        textoResultado+="i";
                        i=i+3;
                    }
                    else if (arrayTexto[i]=="o") {
                        textoResultado+="o";
                        i=i+3;
                    }
                    else if (arrayTexto[i]=="u") {
                        textoResultado+="u";
                        i=i+3;
                    } else{
                        textoResultado+=arrayTexto[i];
                    }      
                    
            }
            return textoResultado;               /*Devueleve el valor del texto decodificado  */
        } 


     function mostrarTexto() {                   /*Funcion que llama a la funcion encriptadora y muestra su   */
        limpiarPanel();                              /*resultado en un elemeto parrafo  */
        var miTexto=obtenerTexto();
        var mostrarTextoFinal=codificarTexto(miTexto);
        document.getElementById("texto").innerHTML=mostrarTextoFinal;
        return mostrarTextoFinal;
     }


     function mostrarTextoDecodificado() {          /*Funcion que llama a la funcion desencriptadora y muestra su   */
        limpiarPanel();                             /*resultado en un elemeto parrafo  */
        var miTexto=obtenerTexto();
        var mostrarTextoFinal=descodificarTexto(miTexto);
        document.getElementById("texto").innerHTML=mostrarTextoFinal;
        return mostrarTextoFinal;
     }



    function limpiartxtArea() {                 /*Limpia el valor del txtarea  */
        miTexto.value="";
        miTexto.focus();
    }


    function llenarPanel() {                    /*Hace visible  los elementos antes de encriptar */
        document.getElementById("contenido").style.display="contents";
        document.getElementById("textoCodificado").style.display="none";
    }


    function limpiarPanel() {                      /*Oculta los elementos y muestra el parrafo con el resultado */
        document.getElementById("contenido").style.display="none";
        document.getElementById("textoCodificado").style.display="contents";

    }


    function copy() {                               /*Funcion que copia el texto del parrafo con el resultado */
        var txtCopiado=document.getElementById("texto");
        var inputOculto=document.createElement("input");
        inputOculto.setAttribute("value", txtCopiado.innerHTML);
        document.body.appendChild(inputOculto);
        inputOculto.select();
        document.execCommand("copy");
        document.body.removeChild(inputOculto);
        alert("Copiado a la papelera");
        
    }

/*Asignando los botones del HTML a variables  */

var boton1=document.getElementById("btnCodi");
var boton2=document.getElementById("btnDescodi");
var boton3=document.getElementById("btnLimpiar");
var boton4=document.getElementById("btnCopy");
var boton5=document.getElementById("btnLimpiar2");

/*Haciendo la llamada a las funciones mediante el evento Onclick 
de los botones*/

boton1.onclick=mostrarTexto;
boton2.onclick=mostrarTextoDecodificado;
boton3.onclick=limpiartxtArea;
boton4.onclick=copy;
boton5.onclick=llenarPanel;



