var idade = 17
console.log(`Você tem ${idade} anos`)

//condiçaõ simples
if (idade < 16) {
   console.log('Não vota') 

//condição aninhada
} else if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto opcional')

//continuação da condição simples
} else {
    console.log('Voto obrigatório')
}