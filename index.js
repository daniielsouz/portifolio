const ftFlamengo = document.querySelector('.flamengo');
const ftBebida = document.querySelector('.bebida');
const ftAcademia = document.querySelector('.academia');
const img = document.querySelector('.principal__img');
const legendaFt = document.querySelector('.legenda__foto');
const textoAbout = document.querySelector('.about__texto');

function idadeAtual(dateString) {
  const diaAtual = new Date();
  const dataAniversario = new Date(dateString);
  let idade = diaAtual.getFullYear() - dataAniversario.getFullYear();
  const i = diaAtual.getMonth() - dataAniversario.getMonth();

  if (i < 0 || (i === 0 && diaAtual.getDate() < dataAniversario.getDate())) {
    idade--;
  }

  return idade;
}
textoAbout.innerHTML = `
        <p class="about__texto__paragrafo">Me chamo Daniel de Souza, tenho ${idadeAtual('1995/04/16')} anos, nascido em Joinvile-SC, mas passei boa parte da minha vida em Tijucas-SC.</p>
        <p class="about__texto__paragrafo">Posso dizer que sou novato nesse negocio de programação, fiz dois semestre de Desenvolvimento Full-Stack, porém acabei trancando a faculdade, e sigo nessa jornada através de cursos.</p>
        <p class="about__texto__paragrafo">Estudei Pyton e Javascript nos dois semestres da faculdade, recentemente estou focando mais em JS, e consequentimente HTML e CSS.  </p>
`
ftFlamengo.addEventListener('click', () => {
  mudarFoto("flamengo")
});

ftBebida.addEventListener('click', () => {
  mudarFoto("bebida")
});

ftAcademia.addEventListener('click', () => {
  mudarFoto("academia")
})

function mudarFoto(contexto) {
  switch (contexto) {
    case "flamengo":
      img.setAttribute('src', '/imagens/D_Flamengo2.jpeg')
      img.setAttribute('alt', 'Autor com a Camisa do Flamengo')
      legendaFt.innerHTML = `Comentarista desoficial do Flamengo nas horas vagas`
      break;

    case "bebida":
      img.setAttribute('src', '/imagens/D_Bebida.jpeg')
      img.setAttribute('alt', 'Autor tomando um suco de cevaca')
      legendaFt.innerHTML = `Degustador amador de cervejas com pouca procedência`
      break

    case "academia":
      img.setAttribute('src', 'imagens/D_Academia.jpeg')
      img.setAttribute('alt', 'Autor biscoitando no espelho da academia')
      legendaFt.innerHTML = `Atleta de baixo nível`

    default:
      break;
  }
}