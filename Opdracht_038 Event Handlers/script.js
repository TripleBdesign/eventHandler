/* Maak een nieuwe functie die de volgende functionaliteiten in zich heeft:

Maak een klik event vast aan de nieuwe button

Wanneer er op de change-background-button geklikt wordt ga je de class "red-background" toevoegen aan je body element.  

Na de click op de button ziet de class van je body tag er zo uit: class="blue-background red-background" . 
Door de volgorde van de CSS in de CSS file, zal de laatste stijl in je stylesheet toegepast. In dit geval staat in je 
stylesheet eerst de blauwe achtergrond en daarna de rode achtergrond gedefineerd. De body heeft nu 2 styles, waarvan de 
rode achtergrond nu toegepast zal worden.
*/

const attachEventToAlertButton = function() {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function() {
        alert("Hello World!");
    });
};

const toggleColor = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};

const attachEventToChangeColorButton = function() {
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function() {
        toggleColor();
    });
};

attachEventToAlertButton();
attachEventToChangeColorButton();



/* We gaan de changeColor functie veranderen zodat de achtergrondkleur ook weer terug veranderd naar rood wanneer er op de knop wordt geklikt. De achtergrondkleur wordt dan "getoggeld" , met andere woorden: erop gezet en er weer afgehaald en er weer opgezet, etc.
Verander de naam van de functie van changeColor naar toggleColor
In plaats van het toevoegen van een extra class "red-background" aan de classlist gaan we de class togglen. Gebruik Google om erachter te komen hoe je dit doet. Hint: toggle.*/