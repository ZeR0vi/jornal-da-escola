import '../styles/app.scss'



import cll from '../assets/cll.jpg'
import ilustracao from '../assets/ilustracao.png'

function App() {
 

  return (

    
    <div className="app">

   


      <header>
      <h1 className="title">203</h1>
      </header>

      <div className="introducao">

        <div>
        
      <h2 className='subtitle'>  Seu portal de notícias <br></br> da E.E Manoel Soares de Couto</h2>
        <h1 className='titulo'><span>203&apos;times</span> </h1>
        
        
        <div className='botao'>
        <a href="#meio"><button>VENHA CONFERIR!</button></a>
        </div>

        <div className='box2'>
        <img className='img2'
        src={ilustracao}
        />
        </div>
        
        </div>
        <div className="global">
        <div className="circle"></div>
        <div className="box">
        <img className='ilustracao'
        src={ilustracao}
        />
        </div>
        </div>
   

      </div>
      

      <section>
      
      <main >


    <div>
      <h1 className='recent'>Recentes</h1>
    </div>

      
      <a href="">
      <div className='images'>
        <img
        src={cll}
        className='img1'
        />
        <h2 className='m'>Manchete</h2>
       
      </div>

      </a>

      <div id='meio' className='bottom'>
        <h2 className='bottomlogo'>203</h2>
      </div>

      
      </main>

      </section>





  </div>
  )
}

export default App
