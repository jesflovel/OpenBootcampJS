//Tipos de datos primitivos

//number
4 

//string
"Hola mundo";
'Hola mundo';
`Hola mundo`;

//booleanos
true;
false;

//null y undefined
null; //variable con espacio asignado en memoria pero este espacio está vacio
undefined; //variable sin ningun espacio en memoria asignado

//null, undefined, false, 0 -> Todas son falsy (Ninguna cumple)
if(null){
    console.log("Cumple");
}else{
    console.log("No cumple");
}