import '../styles/app.scss'

import grafico from './assets/grafico.jpeg'
import cll from './assets/cll.jpg'

export default function App() {
  

  return (
    <div className="home">

      <header>
       <h1 className="title">2HUNDRED3 TIMES</h1>
      </header>

      <div></div>

      <main>
        <p className='data'>Belo Horizonte, 20 de jun. 2023</p>
        <div className='palavraschave'>
        <h2>Internet</h2>
        <h2>Celular</h2>
        <h2>Escola</h2>
        </div>

         <h1 className='manchete'>Excesso de peso ou <br></br> excesso de tela?</h1>

          <div className="geral">
         <div className='dados'>
            <img className='grafico' src={grafico}  />
         </div>

         <div className="noticia">
            <h2 className='subtitulo'>Estudantes sofrem com <br></br> "corcunda moderna".</h2>
            <h3>Pesquisa feita pelos estudantes <br></br> aponta que o uso do <br></br> celular em sala de aula, pode ser <br></br> benéfico ao ensino e <br></br> ajudar em trabalhos escolares.
            </h3>

            <img className='grafico2' src={grafico}  />

            <div className="creditos">
            <p>Reportagem: Turma 2 REG 3</p>
            <p>Redação por: Allan Castro e <br></br>David Lorenzo</p>
            <p>Revisão: Ana Laura, Julia e Bruna</p>
            </div>
          <div className='txteft'>

            <div className='generic'>
            <p>
            Neste mês de junho,os alunos da<br /> 
            turma  2º REG 3 da Escola Estadual  <br />
            Coronel Manoel Soares do Couto  <br />
            realizaram uma pesquisa sobre o  <br />
            uso do celular na sala de aula. As  <br />
            turmas do fundamental II e ensino  <br />
            médio foram entrevistadas pelos  <br />
            alunos sobre o uso de aparelhos  <br />
            celulares em sala de aula
            </p>
            </div>
            <div>

              <img src={cll} className='cll' />

              </div>
            </div>

            <p className='final'>De acordo com os dados, <br /> cerca de 86% dos estudantes  <br /> utilizam o aparelho celular de
              forma  <br /> consciente para realizar trabalhos  <br /> ou algo complementar,notamos  <br /> que a utilização
              do telefone em sala  <br /> de aula pode trazer formas de  <br /> aprendizados mais  <br /> eficientes,
              possibilitando  <br /> ao professor inovar as atividades   <br /> e garantir acessibilidade na busca do
              conhecimento,além <br /> de solucionar  <br /> dúvidas através da tecnologia.
            </p>


          </div>


         </div>
      </main>

      <div id='meio' className='bottom'>
        <h2 className='bottomlogo'>2HUNDRED3 TIMES</h2>
      </div>

    </div>
  )
}


