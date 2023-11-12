
const ftFlamengo = document.querySelector('.flamengo');
const ftBebida = document.querySelector('.bebida');
const ftAcademia = document.querySelector('.academia');
const img = document.querySelector('.principal__img');
const legendaFt = document.querySelector('.legenda__foto');

ftFlamengo.addEventListener('click', ()=>{
  mudarFoto("flamengo")
} );

ftBebida.addEventListener('click', () =>{
  mudarFoto("bebida")
} );

ftAcademia.addEventListener('click', ()=> {
  mudarFoto("academia")
})

function mudarFoto(contexto){
  switch (contexto) {
    case "flamengo":
      img.setAttribute('src','/imagens/D_Flamengo2.jpeg')
      img.setAttribute('alt','Autor com a Camisa do Flamengo')
      legendaFt.innerHTML = `Comentarista desoficial do Flamengo nas horas vagas`
      break;
  
    case "bebida":
      img.setAttribute('src','/imagens/D_Bebida.jpeg')
      img.setAttribute('alt','Autor tomando um suco de cevaca')
      legendaFt.innerHTML = `Degustador amador de cervejas com pouca procedência`
      break

    case "academia":
      img.setAttribute('src','imagens/D_Academia.jpeg')
      img.setAttribute('alt','Autor biscoitando no espelho da academia')
      legendaFt.innerHTML = `Falta mais do que vai na academia`
      
    default:
      break;
  }
}