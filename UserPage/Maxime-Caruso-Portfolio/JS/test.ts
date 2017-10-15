function artikelBox(bezeichnung : string, kurzbeschreibung : string, preis : number, aAnzahl : number, lieferdauer :Date , aktion : boolean, erschienen :Date, aufloessung : string[]):any{
                   this.name = bezeichnung;
                   this.beschreibung = kurzbeschreibung;
                   this.cost = preis;
                   this.menge = aAnzahl;
                   this.dauer = lieferdauer;
                   this.action = aktion;
                   this.birth = erschienen;
                   this.size = aufloessung;
                   }

var artikelBox1 = artikelBox("box","beschreibung", Math.floor(Math.random()*10),Math.floor(Math.random()*20), new Date(2017, 10, 10), false, new Date(1944, 4, 5),new Array("400x400","600x600","20000x20000"));
var artikelBox2 = artikelBox("box1","beschreibung1", Math.floor(Math.random()*10),Math.floor(Math.random()*30), new Date(2015, 8, 10), false, new Date(1938, 6, 5),new Array("400x500","700x600","25000x2000"));
var artikelBox3 = artikelBox("bochs","beSCHREIbung", Math.floor(Math.random()*20),Math.floor(Math.random()*40), new Date(2027, 3, 15), false, new Date(1939, 6, 7),new Array("300x400","600x900","200000x200000"));

//Jetzt kommt die Sternchenaufgabe, wollte die Hauptaufgabe troztdem stehen lassen.

var artikelBoxArray = [
                       artikelBox("box","beschreibung", Math.floor(Math.random()*10), Math.floor(Math.random()*20), new Date(2017, 10, 10), false, new Date(1944, 4, 5),new Array("400x400","600x600","20000x20000")),
                       artikelBox("box1","beschreibung1", Math.floor(Math.random()*10), Math.floor(Math.random()*30), new Date(2015, 8, 10), false, new Date(1938, 6, 5),new Array("400x500","700x600","25000x2000")),
                      artikelBox("bochs","beSCHREIbung", Math.floor(Math.random()*20), Math.floor(Math.random()*40), new Date(2027, 3, 15), false, new Date(1939, 6, 7),new Array("300x400","600x900","200000x200000"))
];
console.log(artikelBoxArray[0].cost,artikelBoxArray[1].beschreibung);
console.log(artikelBoxArray[0].cost*3+artikelBoxArray[1].cost*2+artikelBoxArray[2].cost*10);