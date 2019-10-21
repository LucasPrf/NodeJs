function Somas(a,b=2){
	return a + b

}

console.log(Somas(12))


//Armazendando uma funcao

const Soma = function(a,b=0){
	return a +b

}

const Subtra = (a,b=0)=>{
	return a - b
}
const prod = (a,b=1)=>a*b

const imprimir = (a)=>console.log(a)

imprimir(prod(3,4))