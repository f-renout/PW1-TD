class Cours{
    constructor(matiere, duree){
        this.matiere = matiere;
        this.duree=duree;
    }

    toString(){
        return `cours de ${this.matiere} de duree ${this.duree}`;
    }
}

var cours1 = new Cours("math","2h")
var cours2 = new Cours("info","3h")
document.write(cours1.toString());
document.write("<br/>")
document.write(cours2.toString());
