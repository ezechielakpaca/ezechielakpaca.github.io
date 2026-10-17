---
titre: Titre de ton article
description: Une phrase qui résume l'article. Elle s'affiche dans la liste du blog et dans les aperçus de lien.
date: 2026-10-17
tags: [Java, Spring Boot]
brouillon: true
---

Ceci est un modèle. Tant que `brouillon: true` est présent en haut du fichier, l'article n'apparaît pas sur le site.

Pour publier un article :

1. Copie ce fichier et renomme-le, par exemple `mon-premier-article.md`. Le nom du fichier devient l'adresse de la page : `/blog/mon-premier-article/`.
2. Change le titre, la description, la date et les tags.
3. Écris ton texte en Markdown sous les trois tirets.
4. Supprime la ligne `brouillon: true`, ou mets `brouillon: false`.

## Un sous-titre

Du texte, une liste :

- un point
- un autre point

Et un bout de code :

```java
@GetMapping("/bonjour")
public String bonjour() {
    return "Bonjour";
}
```
