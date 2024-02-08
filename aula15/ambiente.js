//criando o array 
let equipeF1 = ['ferrari', 'mercedes', 'redbull']
console.log(equipeF1)
//adiconando um novo elemento 
equipeF1[3] = 'aston martin'
equipeF1.push('willians')
console.log(equipeF1)
/*
mostrando o cumprimento do array
equipeF1.length
*/
console.log(`O vetor tem ${equipeF1.length} posições.`)
//mostrando os elementos em ordem,neste caso alfabética
console.log(equipeF1.sort())
//descobrindo a chave de um elemento
let pos = equipeF1.indexOf('ferrari')
console.log(`A chave é ${pos}`)
