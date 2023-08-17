import {currentUser, deconnecteUser, isLoginUser, roleUser} from '../reducer/userSlice'

import style from '../styles/PizzaCss.module.css'
import {TiArrowRight} from 'react-icons/ti'
import Panier from "./Panier";
import SupplementsPizza from './SupplementsPizza';
import { useDispatch, useSelector } from "react-redux";
import { addPizza, selectItems } from "../reducer/pizzaSlice";
import { ErrorStockPizza } from "./ErrorStockPizza";
import { ReservationCard } from "./ReservationCard";
import React, { useEffect, useState } from "react";
import { getReservations } from "../api/getReservations";
import { ListeSupplementsData } from '../data/ListeSupplementsData';
import { ListeLinks } from './ListeLinks';

let homePizzas = [
    { 'type': 'napolitaine', 'sauce ': 'tomate', 'piquant': 'non', 'prix': '6 euros', 'nbTotal': 3, 'nbCommandes': 0 },
    { 'type': 'kebab', 'sauce ': 'tomate', 'piquant': 'oui', 'prix': '10 euros', 'nbTotal': 5, 'nbCommandes': 0 },
    { 'type': 'tono', 'sauce ': 'tomate', 'piquant': 'non', 'prix': '9 euros', 'nbTotal': 4, 'nbCommandes': 0 },
    { 'type': 'hot spicy', 'sauce ': 'tomate', 'piquant': 'grave', 'prix': '15 euros', 'nbTotal': 1, 'nbCommandes': 0 },
    {
        'type': 'montagnard',
        'sauce ': 'creme fraiche',
        'piquant': 'non',
        'prix': '20 euros',
        'nbTotal': 2,
        'nbCommandes': 0
    }
]

const pizzaDeNoel = {
    'type': 'petitPapaNoel', 'sauce ': 'tomate', 'piquant': 'non', 'prix': '500 euros', 'nbTotal': 2, 'nbCommandes': 0
}

function getNbCommandeByPizza(pizzaType, listeCommandes) {
    return listeCommandes.filter(p => p.type === pizzaType).length;
}

function stockActuPizzaEpuise(pizzaType, listeCommandes, nbTotal) {
    return listeCommandes.filter(p => p.type === pizzaType).length >= nbTotal;
}

function alertMsg(pizzType, condition) {
    return condition ? <ErrorStockPizza /> : null
}


function getListePizza() {
    const today = new Date();
    const isInDecember = today.getMonth() + 1 === 12
    if (isInDecember) {
        homePizzas.push(pizzaDeNoel)
    }
    return homePizzas
}


homePizzas = getListePizza()


export function ListePizzas() {

    const userName = useSelector(currentUser)
    const myUserId = 1;
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservationsAndSet = async () => {
            let response = await getReservations(myUserId);
            setReservations(response);
        };

        fetchReservationsAndSet();
    }, []);
    

    const dispatch = useDispatch()
    const listeCommandes = useSelector(selectItems)
    const listeSupplement = new ListeSupplementsData()
    return <>
            <ListeLinks/>
        <ul>
            <div>
                <h3> Benvenuto {userName} </h3>
                {reservations.length === 0 && <div>Loading...</div>}
                {reservations.length !== 0 && (
                    <>
                        {reservations.map((reservation) => (
                            <ReservationCard key={reservation.id} reservation={reservation} />
                        ))}

                    </>
                )}
            </div>
            <br/>
            <div className={style.divListePizza}>
                {homePizzas.map((pizz) => (
                    <span className={style.pizzaTitle} key={pizz.type}>
                        <i><TiArrowRight/></i><span id={'pizzaModel-' + homePizzas.indexOf(pizz)}>{pizz.type}</span>{pizz.piquant === 'oui' ?
                            <span className='pizza-piquant'>🔥 </span>
                            : pizz.piquant === 'grave' ? <span className='pizza-piquant'>🔥🔥🔥 </span>
                                : <span className='pizza-cool'>  non piquant </span>}
                        <button key={pizz.type} disabled={stockActuPizzaEpuise(pizz.type, listeCommandes, pizz.nbTotal)}
                            onClick={(event) => {
                                if (getNbCommandeByPizza(pizz.type, listeCommandes) >= pizz.nbTotal) {
                                    alertMsg(pizz.type)
                                } else {
                                    dispatch(addPizza(homePizzas.at(homePizzas.indexOf(pizz))))
                                }
                            }}
                        > Commande
                        </button>
                        <span
                            className={style.stockActu}> En stock : {pizz.nbTotal - listeCommandes.filter(p => p.type === pizz.type).length} </span>
                        {alertMsg(pizz.type, stockActuPizzaEpuise(pizz.type, listeCommandes, pizz.nbTotal))}
                    </span>
                ))}
                </div>
                <br/>
                <Panier></Panier>
            
        </ul>
        <div>
            <h3>Suppléments disponibles (glisser déposer dans la colonne Liste Suppléments)</h3>
            {listeSupplement.getSupplement().map((supplement) => (
                <SupplementsPizza text={supplement.nom} prix={supplement.prix} key={supplement.nom}/>
            ))
            }
        </div>
    </>
}