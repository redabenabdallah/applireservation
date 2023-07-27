import React from "react";
import "./App.css";
import {ListePizzas} from "./components/HomePizzas";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import { HTML5Backend } from 'react-dnd-html5-backend'
import {CataloguePizzas} from "./components/CataloguePizzas";
import style from "./styles/PizzaCss.module.css";
import { DndProvider } from "react-dnd";

function App() {
    return (
        <BrowserRouter>
            <Link className={style.links} to={'/'}> NOS PIZZAS</Link>
            <Link className={style.links} to='/catalogue'> NOTRE CATALOGUE</Link>
            <Routes>
                <Route
                    path="/"
                    element={<DndProvider backend={HTML5Backend}><ListePizzas/></DndProvider>}
                />
                <Route
                    path="/catalogue"
                    element={<CataloguePizzas/>}
                />
            </Routes>
        </BrowserRouter>

)
    ;
}

export default App;
