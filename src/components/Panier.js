import {RecapCommandes} from "./RecapCommandes";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectItems, isPanierAlreadyOpen, hasChangePagePanier, libellePanier, clickOnPanier} from "../reducer/pizzaSlice";
import {MdAddShoppingCart} from 'react-icons/md'
import style from '../styles/Panier.module.css'
import SupplementsPizza from './SupplementsPizza'

function afficheRecap(libelleBtnPanier, pageChanged) {
    if (libelleBtnPanier !== 'Voir mon panier' || (pageChanged && libelleBtnPanier !== 'Voir mon panier')) {
        return <RecapCommandes/>
    }
}


function Panier() {
    const dispatch = useDispatch()
    let isPanierOpen = useSelector(isPanierAlreadyOpen)
    let pageChanged = useSelector(hasChangePagePanier)
    let libPan = useSelector(libellePanier)
    const listeCommandes = useSelector(selectItems)
    return (
        <div className={style.lmjCart}>
            <i><MdAddShoppingCart/></i>
            <h2>Panier</h2>
            <div>
                Dernière Pizza Commandée
                : {listeCommandes.length >= 1 ? listeCommandes.at(listeCommandes.length - 1).type : "aucune"}
            </div>
            <button onClick={() => {
                 dispatch(clickOnPanier())
            }}>
                {libPan}
            </button>
            {afficheRecap(libPan, pageChanged)}
        </div>
        

    )
}

export default Panier