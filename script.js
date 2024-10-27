//const tecnicas = document.querySelectorAll('#item');

/* function randomColor(){
    const letras = "0123456789ABCDEF";
    let color = "#";
    for ( let i = 0;i < 6 ;i++){
        color += letras[Math.floor(Math.random()* 16)];
    }
    return color;
}
    */
//const ids = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5','item-6', 'item-7','item-8', 'item-9'];
let swcolor = ['#2f82b5', '#35b056','#cf0c0c'];
//const swcolor = '#2f82b5, #35b056'; // variable que guarda el color que usare

const tecnicas = document.querySelectorAll('[id^="item-"]'); //selecciona todos los elementos que tengan el id que empieza con item-
tecnicas.forEach(item =>{ //recorre todos los elementos string dentro de la variable tecnicas
  //  const contenedor = document.getElementById(id);

item.addEventListener('mouseover', () =>{ //agregar la funcion 
    item.style.backgroundColor = swcolor[0]; // cambiar el color de fondo al pasar el amouse por encima
});

item.addEventListener('mouseout',()=>{
    item.style.backgroundColor = 'white';
});

});