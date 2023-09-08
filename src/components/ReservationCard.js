import React from "react";
import moment from 'moment';

import style from '../styles/ReservationCard.module.css'

const isBefore = (date1, date2) =>
    moment(date1).isBefore(date2)

const isAfter = (date1, date2) =>
    moment(date1).isAfter(date2)

export function ReservationCard({reservation: {id, name, dateTime}}) {
    const reservationDate = new Date(dateTime);
    const today = new Date();
    const isBeforeResa = isBefore(today, reservationDate)
    const isAfterResa = isAfter(today, reservationDate)
    const displayDate = isBeforeResa
        ? moment(today).format('DD/MM/YYYY HH:mm:SS') :
        isAfterResa ? moment(today).format('DD/MM/YYYY HH:mm:SS') :
            moment(reservationDate).format('DD/MM/YYYY HH:mm:SS')
    const displayTxt = today.getMonth() !== reservationDate.getMonth() ? 'Pour rappel le lancement des pizzas de la mama pour Noel est fixée au ' + moment(reservationDate).format('DD/MM/YYYY HH:mm:SS') :
        'Bravo la date du ' + moment(reservationDate).format('DD/MM/YYYY HH:mm:SS') + ' est la date de lancement des commandes de pizza de la mama pour Noel. Faites vous plaisir';
    return (
        <div className={style.infoResa}>
            <div>{name}</div>
            <br/>
            <div id={"dateResa"}>
                <strong>Date: Nous sommes le </strong>{displayDate}
            </div>
            <div id={"txtResa"}>
                <strong>Message Important :</strong> {displayTxt}
            </div>
            <br/>
        </div>
    );
}

