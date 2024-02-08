let marryf1 = ['Sebastian Vettel', 'Lewis Hamilton', 'Felipe Drugovich']
//mostrando o vetor de maneira mais organizada esteticamente

/*
primeiro modo
for(let pos=0; pos < marryf1.length; pos++) {
    console.log(`Pilotos que tem uma vibe material husband ranking ${pos} nome ${marryf1[pos]}`)
}
*/

console.log('Pilotos com os quais me casaria:')
//modo mais fácil 
for(let pos in marryf1) {
    console.log(marryf1[pos])
}