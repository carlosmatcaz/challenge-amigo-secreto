<h1><b>Challenge Amigo Secreto</b></h1>
<p>Esta es mi propuesta de solución para el Challenge Amigo Secreto de Alura Oracle ONE<p>
<h2>Sobre las características solicitadas</h2>
<p>Después de revisar cuidadosamente los requisitos que debía cumplir el challenge, realicé los siguientes cambios:<br></p>
<p>Primero, simplifiqué en pasos todas las características: Tomar un nombre (se define un cons) que se insertará en la caja (se manipulará a través de la caja)
para almacenarse en una lista (se define una lista de n elementos) y sortearse (se elige de la lista un elemento) que debe mostrarse como el amigo sorteado (se muestra 
el elemento sorteado de la lista en la página)<br></p>
<p>Tras utilizar los elementos vistos, tales como document.getElemmentByID, document.innerHTML, se realizaron diferentes funciones, dado
que para agregar varios amigos, se repiten las acciones de leer y almacenar. También, decidí meter al amigo secreto en una función para simplificar el código y 
que pueda ser utilizado varias veces. <br></p>
<h2>Una modificación personal: Reiniciar</h2>
<p>Dado que me recordó bastante al juego del Número Secreto, decidí implementar también un botón de Reiniciar, con el proósito de que
pueda ser usado varias veces. Considero que la limpieza de la interfaz es importante, por lo que definí las instrucciones para limpiar la caja, reiniciar la lista y limpiar los elementos
que se muestran de ésta, así como el amigo secreto mostrado.<br>
Por otra parte, lo asigné a un botón del cual realicé un clon con el código de HTML y cambié el borde copiando un poco del código de CSS que le corresponde al estilo del botón de Sortear Amigo. 
Con eso, ya pude tener un botón funcional pero no tan lindo, que quizá en un futuro cambie. </p>

