import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Layout} from "./components/pages/Layout"
import {Home} from "./components/pages/Home"
import {About} from "./components/pages/About"
import './App.css';

const themeColor="rgb(127,195,190)"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home themeColor={themeColor}/>}/>
          <Route path="about" element={<About themeColor={themeColor}/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


