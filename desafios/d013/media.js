function calcularmedia() {
    let aluno = window.prompt('Digite o nome do aluno:');
    let nota1 = Number.parseFloat(window.prompt(`Digite a primeira nota de ${aluno}:`));
    let nota2 = Number.parseFloat(window.prompt(`Digite a segunda nota de ${aluno}:`));

    document.getElementById('saida').innerHTML += `<h2>Analisando a situação de ${aluno}...</h2><br>`;

    let media = (nota1 + nota2) / 2; // Correção na prioridade das operações aritméticas
    if (media >= 6) {
        // Aprovado
        document.getElementById('saida').innerHTML += `Com as notas ${nota1} e nota ${nota2}, a média é de ${media}<br>Com média acima de 6, o aluno está <mark style="background-color:#59CD90">APROVADO</mark>.`;
    } else if (media < 3) {
        // Reprovado
        document.getElementById('saida').innerHTML += `Com as notas ${nota1} e nota ${nota2}, a média é de ${media}<br>Com média abaixo de 3, o aluno está <mark style="background-color:#EE6352">REPROVADO</mark>.`;
    } else {
        // Entre 3 e 6 
        // Recuperação
        document.getElementById('saida').innerHTML += `Com as notas ${nota1} e nota ${nota2}, a média é de ${media}<br>Com média entre 3 e 6, o aluno está <mark style="background-color:#FAC05E">EM RECUPERAÇÃO</mark>.`
    }
}
