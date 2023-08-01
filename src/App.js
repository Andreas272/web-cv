import './App.css';
//import intro from './content/text.js'

export default function App() {
  return (
    <HomePage />
  );
}


function HomePage(){
  return (
    <>
    <div className="container">
    <Header />
    <Margin marginClass="margin-left" />
    <Margin marginClass="margin-right" />
    <Menu menuClass="menu-left" />
    <Menu menuClass="menu-right" />
    <TextSection color="rgb(127,195,190)" title="Hi, I am Andreas" text={intro}/>
    <TextSection color="rgb(127,195,190)"  title="Programming projects"/>
    <TextSection color="rgb(127,195,190)"  title="Teaching"/>
    </div>
    </>
  )
}

function Intro({title,text}){
  return(
    <>
  <h2>{title}</h2>
  <p>{text}</p>
   </>
  )
}

function TextSection({color,title,text}){
  return(
    <div className='home-page-section' style={{backgroundColor: color} }>
      <Intro title={title} text={text} />
    </div>
  )
}



function Platforms(buttons){
  let content=""


  return(
    <div className="headerButtons">
      buttons.forEach(button => {

        
      });

    </div>
  )
}

function Header(){
  return (
  <div className='header'>
    <center>
      <h2 color="white">Work in Progress</h2>
    </center>
  </div>
  )
}

function Margin({marginClass}){
  return (
  <div className={marginClass}>
  </div>
  )
}

function Contacts(){
  return(
    <div className='contacts'>
      <p>
        Andreas Valentin Pedersen <br />
        andreasvalentin@hotmail.com <br />
        +45 25 48 46 70 <br />
      </p>
    </div>
  )
}

function Menu({menuClass}){
  if(menuClass==="menu-left"){
    return(
      <>  
      <div className={menuClass}>
        <Portrait />
        <Name />
      </div>   
      </>
    )
  }
  if(menuClass==="menu-right"){
    return(
      <>  
      <div className={menuClass}>
        <center>
          <Contacts />
        </center>
      </div>   
      </>
    )
  }

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
      <p>
        ...
      </p>
    </div>
  )

}

function Portrait(){
  return (
    <div className='ChildBlock'>
      <center>
      <img 
        className="App-portrait"
        src="/images/portrait.jpg"
        alt="Andreas Valentin Pedersen"
      />
      </center>
    </div>
  )
}


function Name(){
  return (
    <div className="Name">
      <center>
        <h3>Andreas Valentin Pedersen</h3>
      </center>
    </div>

  )
}




// Content

let intro=`Welcome to my web page. I am 30 years old and study Software at AAU. 
My first educationen has resultet in four wonderfull years as a physics and maths teacher in the gymnasium. However, I chose to take a break from working and seek out
an enviroenment where I could strengthen my knowledge of the huge IT technology complex which is impacting the world so much.`
