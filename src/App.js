import './App.css';

export default function App() {
  return (
    <HomePage className="App" />
  );
}

function HomePage(){
  return (
    <>
    <Name />
    <div className='ParentBlock'>
    <Portrait />
    <Description />
    </div>
    <Education/>
    </>
  )
}

function Education(){
  return(
    <div className='Section'>
      <h1> Uddannelse</h1>
      <div className="ParrentBlock">
        <div className='ChildBlock'>
          <h2 >Software AAU </h2>
          <h3> Projekter </h3>
          <h3>Kurser </h3>
        </div>
        <div className='ChildBlock'>
          <h2> 9/22 - Nu </h2>
          
        </div>
      
      

      </div>
      

    </div>
  )
}

function Description(){
  return(
    <div className='ChildBlock'>
      <h2>Studerende på AAU Software</h2>
      <p> Jeg er tidligere gymnasielærer i Fysik og Matematik, og opgraderer nu mine kompetencer indenfor software 
        på Softwarestudiet i Aalborg. Jeg leder efter et studiejob, gerne som front-end udvikler.
      </p>
    </div>
  )

}

function Portrait(){
  return (
    <div className='ChildBlock'>
      <img 
        className="App-portrait"
        src="./images/portrait.jpg"
        alt="Andreas Valentin Pedersen"
      />
    </div>
  )
}


function Name(){
  return (
    <div className="Name">
      <h1>Andreas Valentin Pedersen</h1>
    </div>

  )
}







