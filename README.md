# Flexarion Studio

Site statique en une seule page. Les pages (accueil, studio, Cryptesthesia, devlogs, contact) s'affichent par ancres (#accueil, #studio, #cryptesthesia, #devlogs, #devlog-1, #devlog-2, #contact).

## Tester en local
Ouvrir index.html dans un navigateur, ou lancer : python3 -m http.server 8000

## Structure
- index.html : contenu, balises SEO et données structurées JSON-LD
- assets/css/style.css : styles (palette dans :root)
- assets/js/main.js : routage, titres et descriptions par page, formulaires

## À remplacer
Tout ce qui est entre crochets : [NOM], [RÔLE], [DATE], [ENDPOINT À RENSEIGNER], liens réseaux sociaux, e-mail, mentions légales.
Les formulaires n'envoient rien tant qu'aucun service d'envoi n'est branché.

## Déploiement
Netlify, Vercel, GitHub Pages ou OVH : envoyer le contenu du dossier tel quel.
