let projekt1 = {
    name: "Zulassungsstelle Lahr",
    bildsrc: ["img/Visualisierungen/138314531.jpg", "img/Visualisierungen/138314531echt.png"]
};
let projekt2 = {
    name: "PBO",
    bildsrc: ["img/Visualisierungen/hsh3.png", "img/Visualisierungen/HSH4.png"]
};
let projekt3 = {
    name: "FIVE1",
    bildsrc: ["img/Visualisierungen/five1_neu.png", "img/Visualisierungen/five1_alt.png"]
};
let projektArray;
projektArray = [projekt1, projekt2, projekt3];
function generateProjektOverview() {
    let inhalt = "";
    let node = document.getElementById("contentProjekte");
    for (let i = 0; i < projektArray.length; i++) {
        inhalt = "<div class='desk'> <div class='sek' id='sek" + (i + 2) + "'style ='margin-top:0;height:125vh;'>";
        inhalt += "<div class='trenner'><span>" + projektArray[i].name + "</span></div>";
        inhalt += "<div class='berreich'>";
        inhalt += "<table><tr><th>";
        inhalt += "<img src='" + projektArray[i].bildsrc[0] + "'alt='Visualisierung' class='visualiesierung'id='projekt" + i + "v'>";
        inhalt += "</th><th>";
        inhalt += "<img src='" + projektArray[i].bildsrc[1] + "'alt='Gebaut' class='gebaut'id='projekt" + i + "g'>";
        inhalt += "</th></tr> </table> ";
        inhalt += "</div>";
        inhalt += "<button class='leftArrowPro' id='buttonslide" + i + "l'><img src='img/arrow/ic_keyboard_arrow_left_black_24px.svg' alt='pfeil'></button>";
        inhalt += "   <button class='rightArrowPro' id='buttonslide" + i + "r'><img src='img/arrow/ic_keyboard_arrow_right_black_24px.svg' alt='pfeil'></button>";
        inhalt += "</div></div>";
        inhalt += "<div class='handy'> <div class='sek' id='sek" + (i + 2) + "'style ='margin-top:0;height:110%;'>";
        inhalt += "<div class='trenner'><span>" + projektArray[i].name + "</span></div>";
        inhalt += "<div class='berreich'>";
        inhalt += "<img src='" + projektArray[i].bildsrc[0] + "'alt='Visualisierung' class='visualiesierung'id='projekt" + i + "v'>";
        inhalt += "<img src='" + projektArray[i].bildsrc[1] + "'alt='Gebaut' class='gebaut'id='projekt" + i + "g'>";
        inhalt += "</div>";
        inhalt += "</div></div>";
        node.innerHTML += inhalt;
        document.getElementById("projekt" + i + "v").style.margin = "0%";
        document.getElementById("projekt" + i + "g").style.marginLeft = "90%";
        document.getElementById("projekt" + i + "v").style.display = "none";
        document.getElementById("projekt" + i + "g").style.display = "none";
        document.getElementById("buttonslide" + i + "l").style.display = "none";
        document.getElementById("buttonslide" + i + "r").style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', generateProjektOverview);
//# sourceMappingURL=Projekte.js.map