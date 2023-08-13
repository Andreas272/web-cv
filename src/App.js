import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/pages/Layout";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import "./App.css";
import { Gridflix } from "./components/pages/Gridflix";
import {Railway} from "./components/pages/Railway";
import ThisProject from "./components/pages/ThisProject";

const themeColor = "#F8F9F9";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home themeColor={themeColor} />} />
                    <Route path="about" element={<About themeColor={themeColor} />} />
                    <Route path="gridflix" element={<Gridflix themeColor={themeColor} />} />
                    <Route path="railway" element={<Railway themeColor={themeColor} />} />
                    <Route path="this-project" element={<ThisProject themeColor={themeColor} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
