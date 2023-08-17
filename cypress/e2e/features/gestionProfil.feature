#language:fr
Fonctionnalité:  Gestion Profil - Ajout Utilisateur


  Scénario: Je me connecte avec un user admin - Ajouter un UTILISATEUR déjà existant
    Etant donné Je me connecte en tant que Mario avec le mot de passe bros à la page de réservation de pizza à la date du 09/11/2023 14:48:00
    Alors Les liens disponibles sont uniquement NOS PIZZAS,NOTRE CATALOGUE,GESTION
    Quand Je clique sur le lien GESTION
    Alors Le bouton Ajouter est indisponible de base
    Quand Je crée un utilisateur nommé Mario, d'ancienneté 5 ans, de date de naissance 12/01/1980 et dont le role est Client
    Alors J'ai un message indiquant Un user avec le nom Mario existe déjà

  Scénario: Je me connecte avec un user admin - Ajouter un UTILISATEUR non existant
    Etant donné Je me connecte en tant que Mario avec le mot de passe bros à la page de réservation de pizza à la date du 09/11/2023 14:48:00
    Alors Les liens disponibles sont uniquement NOS PIZZAS,NOTRE CATALOGUE,GESTION
    Quand Je clique sur le lien GESTION
    Alors Le bouton Ajouter est indisponible de base
    Quand Je crée un utilisateur nommé Bowser, d'ancienneté 6 ans, de date de naissance 12/01/1981 et dont le role est Client
    Alors J'ai un message indiquant User avec le nom Bowser ajouté

  Scénario: Je me connecte avec un user admin - Ajouter un UTILISATEUR non existant mais ancienneté supérieur à 20
    Etant donné Je me connecte en tant que Mario avec le mot de passe bros à la page de réservation de pizza à la date du 09/11/2023 14:48:00
    Alors Les liens disponibles sont uniquement NOS PIZZAS,NOTRE CATALOGUE,GESTION
    Quand Je clique sur le lien GESTION
    Alors Le bouton Ajouter est indisponible de base
    Quand Je renseigne la valeur 21 pour le champs Ancienneté pour l'ajout de mon utilisateur
    Alors Le bouton Ajouter est indisponible de base

  Scénario: Je me connecte avec un user admin - visualiser la liste des utilisateurs
    Etant donné Je me connecte en tant que Mario avec le mot de passe bros à la page de réservation de pizza à la date du 09/11/2023 14:48:00
    Alors Les liens disponibles sont uniquement NOS PIZZAS,NOTRE CATALOGUE,GESTION
    Quand Je clique sur le lien GESTION
    Alors J'ai un tableau d'utilisateurs avec comme header Nom ▲,Ancienneté ▼,Date de naissance ▼,Role ▼
    Et La colonne Nom du tableau utilisateurs est trié de manière croissante
    Quand Je clique sur la colonne Nom du tableau d'utilisateurs
    Alors La colonne Nom du tableau utilisateurs est trié de manière décroissante
    Quand Je clique sur la colonne Ancienneté du tableau d'utilisateurs
    Alors La colonne Ancienneté du tableau utilisateurs est trié de manière croissante



