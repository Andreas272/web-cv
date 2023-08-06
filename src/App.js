import './App.css';
import { Header } from './components/Header';
import { TextSection} from './components/TextSection';
import { HeaderButtons } from './components/HeaderButtons';
import { Menu } from './components/Menu';
import { Margin } from './components/Margin';


export default function App() {
  return (
    <HomePage />
  );
}

/**
 * @returns JSX code describing the home page of the web cv
 */
function HomePage(){
  return (
    <>
    <div className="container" > {/*container class sets up grid for division of page into segments*/}
    <Header />
    <Margin marginClass="margin-left" />
    <Margin marginClass="margin-right" />
    <Menu menuClass="menu-left" />
    <Menu menuClass="menu-right" />
    <TextSection color="rgb(127,195,190)" title="Hi, I am Andreas" text={intro}/>
    <TextSection color="rgb(127,195,190)"  title="Programming projects"/>
    <TextSection color="rgb(127,195,190)"  title="Teaching"/>
    <HeaderButtons buttons={myButtons}/>
    </div>
    </>
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
