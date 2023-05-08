// const  h1 = document.querySelector('h1');
// const  parrafo = document.querySelector('.parrafo');
// const  pid = document.querySelector('#parrafo2')
// const  input = document.querySelector('input')

// console.log(h1)
// console.log({
//     h1,
//     parrafo,
//     pid,
//     input,
// })
// h1.innerHTML= 'Lobo por siempre'

//leer datos 


const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const parrafo = document.querySelector('#result')
const form = document.querySelector('#form')



form.addEventListener('submit', sumerInputsValues);

function sumerInputsValues(event){
    console.log({event});
    event.preventDefault();
    console.log('desde el JS');
 const sumaInputs = input1.value + input2.value;
 parrafo.innerText= "Resultado: " +  sumaInputs;

}
