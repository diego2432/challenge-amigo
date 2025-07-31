// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaranos variables
let nombreDelAmigo = 0;
let listaDeAmigos = [];
let maximaCantidadDeAmigos = 5;

//Creamos función para agregar amigos
function agregarAmigo(){
    nombreDelAmigo = document.getElementById('amigo').value;

    //Valida que el campo no este vacio. De ser asi muestra un mensaje
    if(nombreDelAmigo != ""){

        //Comprueba el numero maximo de nombres permitidos y limpia entrada de datos
        if(listaDeAmigos.length == maximaCantidadDeAmigos){
            alert('Has alcanzado el número maximo de amigos que puedes agregar')
            document.getElementById('amigo').value = '';
        }
        //Agrega el nombre a la lista, con la funcion muestra en pantalla y limpia la entrada de datos
        else{        
            listaDeAmigos.push(nombreDelAmigo);
            mostrarNombres(nombreDelAmigo);
            document.getElementById('amigo').value = '';
            //console.log(listaDeAmigos); //Muestra la lista y cada nombre que se agrega.
        }
    }
    else{
        //Mensaje si se quiere mandar el campo vacio
        alert('¡Por favor, debes ingresar un nombre valido!')
    }
}

//Creamos la función para mostrar los nombres en pantalla que recibe de parametro el nombre
function mostrarNombres(nombre){
    let nombreAgregado = document.createElement('li');

    //Limpiamos los nombres si ya se habia jugado
    document.getElementById('resultado').textContent = '';
    nombreAgregado.textContent = nombre;
    document.getElementById('listaAmigos').append(nombreAgregado);

}

//Creamos funcion para sortear al amigo secreto y mostrar en pantalla
function sortearAmigo(){
    //Comprobamos que el usuario haya agregado nombres
    if(listaDeAmigos.length > 0){
        let amigoAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
        let amigoSecreto = document.createElement('li');
        
        amigoSecreto.textContent = 'El amigo secreto es: ' + listaDeAmigos[amigoAleatorio];
        document.getElementById('resultado').append(amigoSecreto);
        //Limpiamos la lista de nombres
        document.getElementById('listaAmigos').textContent = '';
        //Limpiamos la lista
        listaDeAmigos = [];
    }
    //Mensaje si el usuario no ha agregado nombres
    else{
        alert('¡Por favor, añada nombres para poder sortear a un amigo!');
    }
}