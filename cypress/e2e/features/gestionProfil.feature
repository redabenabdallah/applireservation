#language:fr
Fonctionnalité:  Gestion Profil


  Scénario: Je me connecte avec un user admin
    Etant donné Je me connecte en tant que Mario avec le mot de passe bros à la page de réservation de pizza à la date du 09/11/2023 14:48:00
    Alors Les liens disponibles sont uniquement NOS PIZZAS,NOTRE CATALOGUE,GESTION

  Scénario: Je me connecte avec un user NON admin
    Etant donné Je me connecte en tant que Homer avec le mot de passe Simpson à la page de réservation de pizza à la date du 11/12/2023 14:48:00
    Alors Les liens disponibles sont uniquement NOS PIZZAS,NOTRE CATALOGUE,MON ESPACE

