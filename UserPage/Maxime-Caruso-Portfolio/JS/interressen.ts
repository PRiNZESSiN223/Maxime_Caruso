var i:number = 0;

setInterval(function(){       
         let inhalt:string = "";
        let node : any = document.getElementById("inhalt");
         if(i === 0){
            inhalt = " Virtuelle-Welten ";
             }
        else if(i === 1){
            inhalt = " 3D Modelling ";
        }
        else if(i === 2){
            inhalt = "3D Animationen";
            }
        else if(i === 3){
            inhalt = " Web Entwicklung ";
                }
        else if(i === 4){
            inhalt = " Geschichten erzählen";
                    }
         else if(i === 5){
            inhalt = " faszinierende Gestaltung";
                    }
            console.log(inhalt);
         node.innerHTML = inhalt;
     i++ 
    if(i> 5){
        i=0;
    }
     }, 3000);

