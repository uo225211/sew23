class Pais {
    /*
    constructor (nombrePais,nombreCapital,poblacion,formaGobierno,coordenadasCapital,religionMayoritaria){
        this.nombrePais=nombrePais;
        this.nombreCapital=nombreCapital;
        this.poblacion=poblacion;
        this.formaGobierno=formaGobierno;
        this.coordenadasCapital=coordenadasCapital;
        this.religionMayoritaria=religionMayoritaria;
    }
*/
    constructor (nombrePais,nombreCapital,poblacion){
        this.nombrePais=nombrePais;
        this.nombreCapital=nombreCapital;
        this.poblacion=poblacion;        
    }

    rellenarDatos (formaGobierno,coordenadasCapital,religionMayoritaria){
        this.formaGobierno=formaGobierno;
        this.coordenadasCapital=coordenadasCapital;
        this.religionMayoritaria=religionMayoritaria;
    }

    getNombrePais(){
        return ""+this.nombrePais;
    }
    getNombreCapital(){
        return ""+this.nombreCapital;
    }
    getPoblacion(){
        return ""+this.poblacion;
    }
    getFormaGobierno(){
        return ""+this.formaGobierno;
    }
    getCoordenadasCapital(){
        return ""+this.coordenadasCapital;
    }
    getReligionMayoritaria(){
        return ""+this.religionMayoritaria;
    }

    infoSecundaria(){
        return "<ul> <li> "+this.poblacion+"</li> <li>"+this.formaGobierno+"</li> <li>"+this.religionMayoritaria+"</li> </ul>";
    }
    infoCoordenadas(){
        document.write("<p>Las coordenadas de "+this.getNombreCapital()+" son: "+this.coordenadasCapital+". </p>");
    }

    mostrarInfo(){
        document.write("<p>Nombre: "+ this.getNombrePais()+"</p>");
        document.write("<p>Capital: "+ this.getNombreCapital()+"</p>");
        this.infoCoordenadas();
    }

}
 var republica=new Pais("Republica Checa", "Praga", "10510000"  );
 republica.rellenarDatos( "República parlamentaria","50.07487550135318, 14.431291625910324" ,"Cristianismo")
 


 