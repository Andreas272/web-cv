import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Layout} from "./pages/Layout"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
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


