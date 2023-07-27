#language:fr
Fonctionnalité:  Login

  Scénario: Je me connecte à la page de réservation de pizza avant la date du 10/12/2023 14:48:00 en dehors du mois de Noel
    Etant donné Je me connecte à la page de réservation de pizza à la date du 09/11/2023 14:48:00
    Alors La date de réservation affichée est la date du 09/11/2023 14:48:00
    Et Le message indique bien que Pour rappel le lancement des pizzas de la mama pour Noel est fixée au 10/12/2023 14:48:00
    Et Dans le catalogue de pizzas disponibles, j'ai les pizzas suivantes napolitaine,kebab,tono,hot spicy,montagnard

  Scénario: Je me connecte à la page de réservation de pizza après la date du 10/12/2023 14:48:00 au mois de Noel
    Etant donné Je me connecte à la page de réservation de pizza à la date du 11/12/2023 14:48:00
    Alors La date de réservation affichée est la date du 11/12/2023 14:48:00
    Et Le message indique bien que Bravo la date du 10/12/2023 14:48:00 est la date de lancement des commandes de pizza de la mama pour Noel. Faites vous plaisir
    Et Dans le catalogue de pizzas disponibles, j'ai les pizzas suivantes napolitaine,kebab,tono,hot spicy,montagnard,petitPapaNoel

  Scénario: Gestion du Panier
    Etant donné Je me connecte à la page de réservation de pizza à la date du 09/11/2023 14:48:00
    Quand Je commande 1 pizza napolitaine
    Et Je clique sur le bouton Voir mon panier
    Alors J'ai un tableau récapitulatif de ma commande avec comme header Commande N°,Libelle,Prix Unitaire,Nb Commandes,
    Et J'ai un tableau récapitulatif avec la commande 0,napolitaine,6 euros,1
    Et J'ai un tableau total avec comme header Prix à payer
    Et J'ai un tableau total avec un montant de 6 euros
    Quand Je commande 1 pizza tono
    Alors J'ai un tableau récapitulatif avec la commande 0,napolitaine,6 euros,1
    Alors J'ai un tableau récapitulatif avec la commande 1,tono,6 euros,1
    Et J'ai un tableau total avec comme header Prix à payer
    Et J'ai un tableau total avec un montant de 15 euros
