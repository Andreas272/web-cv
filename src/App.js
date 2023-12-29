import "./App.css";
import { Layout } from "./components/pages/Layout";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Gridflix } from "./components/pages/Gridflix";
import { BlaestManagementSystem } from "./components/pages/BlaestManagementSystem";
import { Railway } from "./components/pages/Railway";
import ThisProject from "./components/pages/ThisProject";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


const themeColor = "#F8F9F9";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home themeColor={themeColor} />} />
                    <Route path="about" element={<About themeColor={themeColor} />} />
                    <Route path="blaest-management-system" element={<BlaestManagementSystem themeColor={themeColor} />} />
                    <Route path="gridflix" element={<Gridflix themeColor={themeColor} />} />
                    <Route path="railway" element={<Railway themeColor={themeColor} />} />
                    <Route path="this-project" element={<ThisProject themeColor={themeColor} />} />
                </Route>
            </Routes>
        </Router>
    );
}
