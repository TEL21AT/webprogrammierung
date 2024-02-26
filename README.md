# Unterlagen zur Vorlesung Webprogrammierung

* Vorlesungsmaterialien und Beispielcode
* Übgunsaufgaben
* Generelle Information

## Setup und Vorraussetzungen

* [IDE](https://code.visualstudio.com/)
* [Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm)
* NPM
* [Pexels - Website mit linzenfreien Bildern](https://www.pexels.com/de-de/)
* [MongoDB](https://account.mongodb.com/account/login)
* [Für MAC Nutzer brew als Paketverwaltung](https://brew.sh)


## Nützliche links
- Information zu den HTML Attributen und Elementen
  - [W3School](https://www.w3schools.com/html/default.asp)
  - [MDN](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [Google style guidelines](https://google.github.io/styleguide/htmlcssguide.html)


## GitHub pages Deployment

* [BasicWebsite.html](https://tel21at.github.io/webprogrammierung/Vorlesungsmaterial/html/BasicWebsite.html)
* [BasicWebsite-bootstrap.html](https://tel21at.github.io/webprogrammierung/Vorlesungsmaterial/html/BasicWebsite-bootstrap.html)
* [weitereElemente](https://tel21at.github.io/webprogrammierung/Vorlesungsmaterial/html/weitereElemente.html)
* [BasicVueApp](https://tel21at.github.io/webprogrammierung/Vorlesungsmaterial/Vue.js/index.html)


## Assignments:

1. Basic Website
2. Movie Blog Landing page mit Quasar:

   Starte ein neues Quasar Projekt mit der Quasar CLI mit dem Titel “Movie Blog” und designe eine Landing Page für einen Movie Blog. Die Seite sollte eine Top Bar, ein Suchfeld und einen Footer im Layout enthalten. Der Seiteninhalt soll verschiedene Filme mit groben Informationen und einem entsprechenden Titelbild in einer oder mehreren Listen enthalten. Desweiteren soll das Durchschnittsrating des jeweiligen Films dargestellt werden. Beispiele für Listen sind z.B. “Top-Rangliste” oder “Trending Movies”.

3. Movie Detail Page & Authentication:
    Aufbauend auf dem letzten Assignment:  

    Desgine eine “Movie Detail” Page im Quasar Movie Blog, auf der sowohl das Titelbild, als auch weitere Details (z.B. Beschreibung, Schauspieler, etc.) zum Film zu sehen sind. Diese sollte über eine Navigationsmöglichkeit über den VueRouter erreichbar sein. Des Weiteren soll es möglich sein, dem Film eine Sternebewertung zu geben und den Film auf die Watchlist hinzuzufügen (muss noch keine echte Funktionalität haben).  

    Implementiere Authentifizierung für den Quasar Movie Blog und schreibe eine kleine “UserProfile” Page, die Informationen zum angemeldeten Benutzer darstellt und auch über eine Navigationsmöglichkeit mit dem VueRouter erreichbar sein soll (nur, wenn der Benutzer angemeldet ist). Es soll im Layout einen “Login” Knopf geben, über den sich ein Benutzer anmelden kann und der auch nur angezeigt werden soll, wenn der Benutzer noch nicht angemeldet ist. Es soll auch einen Logout Knopf geben, der nur angezeigt wird, wenn der Benutzer angemeldet ist.  
    
    Grundlage für die Implementierung der Authentifizierung: https://github.com/auth0/auth0-vue  
    Domain: dev-4yituajghfjc8wca.us.auth0.com  
    Client-ID: t9wzEOtOAx3CyOLSQt8QU39cTrE2Gg1X