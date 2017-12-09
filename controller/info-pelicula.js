module.exports = function(app){

    app.get('/api/pelicula/:id', function(req, res, next) {

        var descrip = "";
        var request = require("request");

        request({
            method: 'GET',
            json: true,
            uri: "https://www.filmaffinity.com/es/film"+ req.params.id +".html",
        }, function(error, response, body) {
            if (error){
                res.json({error});
            }
            else{

                const cheerio = require('cheerio');
                const $ = cheerio.load(body, {
                    normalizeWhitespace: true,
                    xmlMode: true
                });
                const directores = $('span.director').text().trim();
                const actores = $('span.cast').text().trim();

                var title = body.substring(body.indexOf("<title>")+7, body.indexOf("</title>")-15);
                var anio = title.substring(title.length-6, title.length);
                title = title.substring(0, title.indexOf(anio)-1);
                anio = anio.replace("(","").replace(")","");

                var ini = body.indexOf('<dd itemprop="description">') + 27;
                descrip = body.substring(ini, body.length);

                var fin = descrip.indexOf('(FILMAFFINITY)');
                descrip = descrip.substring(0, fin-1);

                if(descrip.empty){
                    res.json({error : "Pelicula no encontrada"});
                }

                const respuesta = {
                    titulo :  title,
                    anio : anio,
                    direccion: directores,
                    reparto: actores,
                    sinopsis: descrip
                };

                res.json(respuesta);
            }
        });
    });









}