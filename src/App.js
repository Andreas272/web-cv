import './App.css';


function Description(){
  return(
    <div className='ChildBlock'>
      <h2>Software Developer</h2>
      <p>With a background in physics and mathemathics, I am currently upgrading my software competences 
         on the Software program at AAU. I am looking for student work while I finish the program.
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
    </>
  )
}




