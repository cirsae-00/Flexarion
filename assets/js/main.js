var M={
accueil:["Flexarion Studio | Jeu vidéo indépendant, Aix-en-Provence","Flexarion Studio, studio de jeu vidéo indépendant fondé en 2018 à Aix-en-Provence. Découvrez Cryptesthesia, un jeu narratif rétro-futuriste en développement."],
studio:["Le studio Flexarion : histoire, équipe, Aix-en-Provence","Histoire, équipe et méthode de Flexarion Studio, studio de jeu vidéo indépendant créé en 2018 et installé à Aix-en-Provence. Un petit studio, des jeux atmosphériques."],
cryptesthesia:["Cryptesthesia | Jeu narratif post-apocalyptique rétro","Cryptesthesia, jeu de mystère introspectif dans un futur post-apocalyptique rétro années 80/90, en développement chez Flexarion Studio. Univers, mécaniques, visuels."],
devlogs:["Devlogs | Journal de développement de Cryptesthesia","Le journal de développement de Cryptesthesia : direction artistique, son, narration et coulisses du jeu indépendant de Flexarion Studio, à Aix-en-Provence."],
"devlog-1":["Construire l’ambiance rétro-futuriste de Cryptesthesia","Comment Flexarion Studio construit l’ambiance rétro-futuriste de Cryptesthesia : un futur inventé dans les années 80, de la palette au grain en passant par le son."],
"devlog-2":["Concevoir un jeu introspectif : mystère et silence","Devlog de Cryptesthesia : comment Flexarion Studio conçoit un jeu introspectif avec le mystère, le rythme et le silence comme moteurs de la narration."],
contact:["Contact et presse | Kit presse Flexarion Studio","Contactez Flexarion Studio, studio de jeu vidéo indépendant d’Aix-en-Provence : formulaire, coordonnées et kit presse de Cryptesthesia, jeu en développement."]};
function go(){
var h=location.hash.slice(1);if(!M[h])h="accueil";
document.querySelectorAll(".view").forEach(function(v){v.classList.toggle("on",v.dataset.v===h)});
var top=h.indexOf("devlog-")==0?"devlogs":h;
document.querySelectorAll("nav a").forEach(function(a){if(a.getAttribute("href")==="#"+top)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
document.title=M[h][0];
var d=document.querySelector('meta[name=description]');d.setAttribute("content",M[h][1]);
document.querySelector('meta[property="og:title"]').setAttribute("content",M[h][0]);
document.querySelector('meta[property="og:description"]').setAttribute("content",M[h][1]);
window.scrollTo(0,0);document.getElementById("main").focus({preventScroll:true});
}
addEventListener("hashchange",go);go();
document.querySelectorAll("form").forEach(function(f){f.addEventListener("submit",function(e){e.preventDefault();
if(f.querySelector(".hp")&&f.querySelector(".hp").value)return;
f.querySelector(".ok").hidden=false;});});
