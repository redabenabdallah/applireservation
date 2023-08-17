import styles from '../styles/RecapCommandes.module.css'
import {TiDelete} from 'react-icons/ti'
import {useDispatch, useSelector} from "react-redux";
import {prixTotal, removePizza, selectItems, listeSupplementsActual} from "../reducer/pizzaSlice";
import { RecapCommandesSupplements } from './RecapCommandesSupplements'
import {allInfosUser} from '../reducer/userSlice'
import { useState } from 'react';
import { Anniversaire } from './Anniversaire';

export function RecapCommandes() {
    const dispatch = useDispatch()
    const listeCommandes = useSelector(selectItems)
    let prixCalcule = useSelector(prixTotal)
    const usrConx = useSelector(allInfosUser)
    const usrBirth = new Date(usrConx.naissance)
    const today = new Date()
    let isBirthDay = false
    if( usrBirth.getDate() === today.getDate() && usrBirth.getMonth() === today.getMonth()){
        prixCalcule = prixCalcule * 0.5
        isBirthDay = true
    }
    let listeSupp = useSelector(listeSupplementsActual)
    if (listeCommandes.length === 0) {
        return <div><span>Aucune commande enregistrée</span></div>
    } else {
        return <div>
            <h3>Voici les pizzas commandées</h3>
            <table className={styles.tableRecap} id="tableauRecap">
                <thead>
                <tr>
                    <th className={styles.tableRecap}>Commande N°</th>
                    <th className={styles.tableRecap}>Libelle</th>
                    <th className={styles.tableRecap}>Prix Unitaire</th>
                    <th className={styles.tableRecap}>Nb Commandes</th>
                    <th className={styles.tableRecap}>Liste Suppléments</th>
                    <th className={styles.tableRecap}></th>
                </tr>
                </thead>
                <tbody>
                {
                    listeCommandes.map(pizz => (<tr key={pizz.idCommande} className={styles.tableRecap}>
                        <td className={styles.tableRecap}>
                            {pizz.idCommande}
                        </td>
                        <td className={styles.tableRecap}>
                            {pizz.type}
                        </td>
                        <td className={styles.tableRecap}>
                            {pizz.prix}
                        </td>
                        <td className={styles.tableRecap}>
                            {pizz.nbCommandes}
                        </td>
                        <RecapCommandesSupplements pizzCommande={pizz.idCommande}/>
                        <td key={pizz} className={styles.tableRecap}>
                            <i onClick={() => {
                                dispatch(removePizza({pizz, listeSupp}))
                            }}><TiDelete/></i>
                        </td>
                    </tr>))
                }
                </tbody>
            </table>
            <table id="tableauPrixTotal">
                <thead>
                <tr>
                    <th>Prix à payer</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {prixCalcule} euros
                    </td>
                </tr>
                </tbody>
            </table>
            {isBirthDay && <Anniversaire/>}
        </div>
    }
}