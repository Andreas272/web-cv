import {Outlet} from "react-router-dom"
import { Header } from '../components/Header';
import { HeaderButtons } from '../components/HeaderButtons';
import { Menu } from '../components/Menu';
import { Margin } from '../components/Margin';
import { Footer } from "../components/Footer";

/**
 * @returns JSX code describing the layout of the website which is independent on route. 
 */
export function Layout(){
    return (
      <>
      <div className="container" > {/*container class sets up grid for division of page into segments*/}
        <Header />
        <HeaderButtons buttons={myButtons}/>
        <Margin marginClass="margin-left" />
        <Margin marginClass="margin-right" />
        <Menu menuClass="menu-left" />
        <Menu menuClass="menu-right" />
        <Footer />
        <Outlet/>
      </div>
      </>
    )
  }

  const myButtons=[
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/andreas-valentin-pedersen/",
      logoPath: "/images/In-White-128.png"
    },
    {
      name: "GitHub",
      url: "https://github.com/Andreas272" ,
      logoPath: "/images/github-mark-white.png"
    }
  ]
  