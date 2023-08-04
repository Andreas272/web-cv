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
    <SoMeButtons buttons={myButtons}/>
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

function SoMeButtons({buttons}){
  return(
    <div className="header-buttons">
      {buttons.map((buttoni,i)=>{
        return(
        <a href={buttoni.url} className='header-button' role="button">
          {buttoni.name}
        </a>
        )
      }
      )}
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

const myButtons=[
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andreas-valentin-pedersen/",
    logoPath: ""
  },
  {
    name: "GitHub",
    url: "https://github.com/Andreas272" ,
    logoPath: ""

  }
]
