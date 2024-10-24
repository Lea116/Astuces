function entierAleatoire(min, max){
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function boutonCouleur(){
    var tabcolor = ["#35acda", "#bedede", "#c42f50", "#aca393", "#ff0000", "#78edb2", "#ffbe46"];
    var nb = entierAleatoire(0, 7);
    document.body.style.backgroundColor = tabcolor[nb];
}

function changeImg(nom){
    document.getElementById("burgerimg").src = nom;
}