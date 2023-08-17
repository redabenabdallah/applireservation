  #language:fr
Fonctionnalité:  Gestion mon Espace
  
  
  Scénario: Je me connecte avec un user NON admin
    Etant donné Je me connecte en tant que Homer avec le mot de passe Simpson à la page de réservation de pizza à la date du 11/12/2023 14:48:00
    Alors Les liens disponibles sont uniquement NOS PIZZAS,NOTRE CATALOGUE,MON ESPACE
    Quand Je clique sur le lien MON ESPACE
    Alors Pour le champs de label Mon nom j'ai la valeur Homer
    Alors Pour le champs de label Mon ancienneté j'ai la valeur 1
    Alors Pour le champs de label Mon role j'ai la valeur client

  Scénario: Simulation de visualisation de point de bonus
    Etant donné Je me connecte en tant que Homer avec le mot de passe Simpson à la page de réservation de pizza à la date du 11/12/2023 14:48:00
    Alors Les liens disponibles sont uniquement NOS PIZZAS,NOTRE CATALOGUE,MON ESPACE
    Quand Je clique sur le lien MON ESPACE
    Alors Pour le champs de label Mon nom j'ai la valeur Homer
    Alors Pour le champs de label Mon ancienneté j'ai la valeur 1
    Alors Pour le champs de label Mon role j'ai la valeur client
    Quand Je veux voir mes points bonus
    Alors Pour le champs de label Mon bonus j'ai la valeur 50%

  Scénario: Simulation de visualisation de l'historique des commandes
    Etant donné Je me connecte en tant que Homer avec le mot de passe Simpson à la page de réservation de pizza à la date du 11/12/2023 14:48:00
    Alors Les liens disponibles sont uniquement NOS PIZZAS,NOTRE CATALOGUE,MON ESPACE
    Quand Je clique sur le lien MON ESPACE
    Alors Pour le champs de label Mon nom j'ai la valeur Homer
    Alors Pour le champs de label Mon ancienneté j'ai la valeur 1
    Alors Pour le champs de label Mon role j'ai la valeur client
    Quand Je veux voir mon historique de commandes
    Alors J'ai un tableau historique de commandes avec comme header Identifiant Commande,Date Commande,Remarque client,Remarque livreur
    Et A la ligne N° 1, la colonne Remarque client du tableau historique a pour valeur commande en retard
    Et A la ligne N° 2, la colonne Remarque livreur du tableau historique a pour valeur client affamé donc calme

  Scénario: Test ajout photo au bon format
    Etant donné Je me connecte en tant que Homer avec le mot de passe Simpson à la page de réservation de pizza à la date du 11/12/2023 14:48:00
    Alors Les liens disponibles sont uniquement NOS PIZZAS,NOTRE CATALOGUE,MON ESPACE
    Quand Je clique sur le lien MON ESPACE
    Alors Pour le champs de label Mon nom j'ai la valeur Homer
    Alors Pour le champs de label Mon ancienneté j'ai la valeur 1
    Alors Pour le champs de label Mon role j'ai la valeur client
    Quand Je choisis comme image homer.png pour ma photo de profil
    Alors L'image de ma photo de profil du champs label Ma photo est bien mise à jour et visible

    Scénario: Test ajout photo au mauvais format
    Etant donné Je me connecte en tant que Homer avec le mot de passe Simpson à la page de réservation de pizza à la date du 11/12/2023 14:48:00
    Alors Les liens disponibles sont uniquement NOS PIZZAS,NOTRE CATALOGUE,MON ESPACE
    Quand Je clique sur le lien MON ESPACE
    Alors Pour le champs de label Mon nom j'ai la valeur Homer
    Alors Pour le champs de label Mon ancienneté j'ai la valeur 1
    Alors Pour le champs de label Mon role j'ai la valeur client
    Quand Je choisis comme image homer.txt pour ma photo de profil
    Alors L'image de ma photo de profil du champs label Ma photo n'est pas mise à jour
