---
titre: Du backend à l'UX — ce que le code m'a appris sur la conception
description: Passer de Spring Boot à Figma m'a appris qu'une bonne interface commence par comprendre les données, les contraintes et les erreurs.
date: 2026-10-17
tags: [UX, Java, Produit]
---

J'ai commencé par le backend : des services Java / Spring Boot pour un core banking system, des API REST, des requêtes SQL à optimiser. Puis j'ai rejoint l'équipe UX pour concevoir les parcours d'une application de microcrédit.

On pourrait croire que ce sont deux métiers éloignés. En pratique, le code m'a appris beaucoup sur la façon de concevoir une interface.

## 1. Une interface, c'est d'abord des données

Quand on a écrit l'API, on sait ce qu'un écran va réellement recevoir : des champs vides, des listes de 2 éléments ou de 2 000, des montants longs, des noms qui débordent.

Je conçois donc mes maquettes avec des données réalistes, pas avec un contenu « parfait » qui n'existera jamais.

## 2. Les états oubliés sont ceux qui comptent

Côté serveur, on gère sans cesse les cas d'erreur. Côté interface, ils sont souvent oubliés :

- le chargement ;
- la liste vide ;
- l'erreur réseau ;
- le paiement refusé ;
- la session expirée.

Dans une application financière, ces états ne sont pas des détails : ce sont les moments où l'utilisateur a besoin d'être rassuré.

## 3. Parler la même langue que les développeurs

Connaître les contraintes techniques change la discussion. Je sais ce qui coûte cher à développer, ce qu'une API peut renvoyer et ce qui demande une modification du modèle de données.

Résultat : des maquettes plus faciles à livrer, et moins d'allers-retours entre design et développement.

## 4. Prototyper tôt, valider vite

Un prototype interactif coûte moins cher qu'un endpoint réécrit. Tester un parcours avant de coder permet de corriger le besoin, pas seulement l'écran.

## Ce que je retiens

Le développement m'a appris la rigueur, et l'UX m'a appris à partir de l'utilisateur. Les deux se complètent : comprendre le besoin, dessiner le parcours, puis construire un produit qui fonctionne vraiment.

C'est cette double approche que je souhaite mettre au service d'une équipe pendant mon stage de L3 MIAGE, à partir d'avril 2027.
