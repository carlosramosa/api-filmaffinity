var express = require('express');
var router = express.Router();

router.get('/:busqueda', function(req, res, next) {

    var descrip = "";
    var request = require("request");

    request({
        method: 'GET',
        json: true,
        uri: "https://www.googleapis.com/customsearch/v1?q="+req.params.busqueda+" inurl:filmaffinity.com/es&key=AIzaSyAz2ZC8trzVOBCPGaeC8ReTmIYb5vt1yWs&cx=002019692856142923148:nijox13azs4",
    }, function(error, response, body) {

        if (error){

            res.json({error});
        }
        else{

            const items = body.items;
            const itemsValidos = [];

            items.map(function(item){
                if (item.link.indexOf('www.filmaffinity.com/es/film')!== -1){
                    const pelicula = {
                        titulo : item.title.replace(' - FilmAffinity',''),
                        id: item.link.replace('http://www.filmaffinity.com/es/film','').replace('.html','')
                    };
                    itemsValidos.push(pelicula);
                }
            });

            res.json(itemsValidos);
        }
    });
});

module.exports = router;