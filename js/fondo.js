class Fondo {
   
    constructor (nombrePais,nombreCapital,coordenadas){
        this.nombrePais=nombrePais;
        this.nombreCapital=nombreCapital;
        this.coordenadas=coordenadas;        
    }

    mostrarImagen(){
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        $.getJSON(flickrAPI, 
                {
                    tags: this.nombrePais,
                    tagmode: "any",
                    format: "json"
                })
            .done(function(data) {
                    $.each(data.items, function(i,item ) {
                        /*
                        $("<img />").attr( "src", item.media.m).appendTo( "body" );
                        if ( i === 20 ) {
                                return false;
                        }*/
                        $("section")
                    });
        });
    
    }

    
}
var fondo=new Fondo(republica.getNombrePais(),republica.getNombreCapital(),republica.getCoordenadasCapital());
fondo.mostrarImagen();