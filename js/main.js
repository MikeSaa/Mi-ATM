const screen = document.querySelector('.atm-system__screen');
const inputCard = document.querySelector(".atm-system__card");

screen.innerText="Bienvenido al ATM";



//const keys = document.querySelectorAll('.atm-system__keys');
// keys[0].addEventListener('click',()=>(alert("soy 1")))

//keys[0].addEventListener("click",(event)=>console.log(event.target.id));
//keys[4].addEventListener("click",(event)=>console.log(event.target.id));

const keys = document.querySelector('.atm-system__input-keys');
let pin=[];

const validatePin = (pin_keys)=>{
    if(pin_keys.length === 4){
        if(pin_keys.toLocateString().replaceAll("," ,"")==="0000"){
            screen.innerText="Pin ingresado Correctamente";
    }else{
        screen.innerText="No correcto";
    }

    console.log(pin_keys)
}}


keys.addEventListener('click',(event)=>{
   
    if(event.target.id){// si tiene id va a entrar
        //recogemos el valor de el id y hacemos push en el arreglo
        pin.push(event.target.id);
    }    else{
        console.log('tecja sin funcion');
    }
    console.log(pin);
})






// keys.addEventListener('click',(event)=>{
//     if(event.target.id){
//         console.log(event.target.id)
//     }    else{
//         console.log('no tiene id');
//     }
// })
    //console.log(event.target))





inputCard.addEventListener("click", function(){ 
    screen.innerText="Validando tarjeta...";
    setTimeout(() => {
        screen.innerText='inserte su PIN';
    }, 2500);
   
});

window.addEventListener('load',()=>{
    screen.innerText="bienvenido al ATM"
})


// window.addEventListener();


// function awake(){
//     console.log('awake');
// }

// const sleep= () =>{
//     console.log('sleep');
// }

// const sum =(a,b)=>(a+b)

// // const sum =(a,b)=>{
// //     return a+b;
// // }

// awake();
// sleep();
// console.log(sum(8,4));

const arr=['victor',37]
const obj = {name:'victor', age:37}
console.log(obj.name,obj.age);











// PascalCase -> para clases
// camelCase -> para variables
// snake_case -> keys en un objeto