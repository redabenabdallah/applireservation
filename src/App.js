import React from "react";
import "./App.css";
import {ListePizzas} from "./components/HomePizzas";
import {Gestion} from "./components/Gestion";
import {MonEspace} from "./components/MonEspace";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import { HTML5Backend } from 'react-dnd-html5-backend'
import {CataloguePizzas} from "./components/CataloguePizzas";
import style from "./styles/PizzaCss.module.css";
import { DndProvider } from "react-dnd";
import { LoginComp } from "./components/LoginComp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<DndProvider backend={HTML5Backend}><LoginComp/></DndProvider>}
                />
                <Route
                    path="/mesPizzas"
                    element={<DndProvider backend={HTML5Backend}><ListePizzas/></DndProvider>}
                />
                <Route
                    path="/catalogue"
                    element={<CataloguePizzas/>}
                />
                <Route
                    path="/gestion"
                    element={<Gestion/>}
                />
                <Route
                    path="/monEspace"
                    element={<MonEspace/>}
                />
            </Routes>
        </BrowserRouter>

)
    ;
}

export default App;
