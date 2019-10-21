const cad={
	nome:'Lucas',
	idade:19,
}

console.log(cad.nome)

function sss(nome){

	this.nome = nome
	return nome

}	

const id = new sss('Marcio')
console.log(id.nome)
const di = new sss('Kevin')
console.log(di.nome)