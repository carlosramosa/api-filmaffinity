# api-filmaffinity
API REST no oficial de Filmaffinity en castellano

GET - Búsqueda de id de peliculas por palabras clave

https://api-filmaffinity.herokuapp.com/api/busqueda/

GET - Búsqueda de película por id

https://api-filmaffinity.herokuapp.com/api/pelicula/


# White House Web API Standards

* [Introducción](#introduccion)
* [RESTful URLs](#restful-urls)
* [HTTP Verbs](#http-verbs)
* [Responses](#responses)
* [Error handling](#error-handling)
* [Versions](#versions)
* [Record limits](#record-limits)
* [Request & Response Examples](#request--response-examples)
* [Mock Responses](#mock-responses)
* [JSONP](#jsonp)

## Introducción

Se ha implementado una API REST para extraer información de Filmaffinity.
Se trata de una API no oficial, por lo que blablabla...

## RESTful URLs

### General guidelines for RESTful URLs
* A URL identifies a resource.
* URLs should include nouns, not verbs.
* Use plural nouns only for consistency (no singular nouns).
* Use HTTP verbs (GET, POST, PUT, DELETE) to operate on the collections and elements.
* You shouldn’t need to go deeper than resource/identifier/resource.
* Put the version number at the base of your URL, for example http://example.com/v1/path/to/resource.
* URL v. header:
    * If it changes the logic you write to handle the response, put it in the URL.
    * If it doesn’t change the logic for each response, like OAuth info, put it in the header.
* Specify optional fields in a comma separated list.
* Formats should be in the form of api/v2/resource/{id}.json

### Good URL examples
* Búsqueda de id de películas que coincidan con la búsqueda 'lo que el viento se llevo':
    * GET https://api-filmaffinity.herokuapp.com/api/busqueda/lo+que+el+viento+se+llevo
    * GET https://api-filmaffinity.herokuapp.com/api/busqueda/la+amenaza+fantasma
* Búsqueda de una película a través de su id :
    * GET https://api-filmaffinity.herokuapp.com/api/pelicula/470268
    * GET https://api-filmaffinity.herokuapp.com/api/pelicula/267008

    {
        titulo: "La guerra de las galaxias. Episodio I: La amenaza fantasma",
        anio: "1999",
        direccion: "George Lucas",
        reparto: "Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd, Samuel L. Jackson,
            Ian McDiarmid, Ray Park, Anthony Daniels, Kenny Baker, Pernilla August, Hugh Quarshie,
            Ahmed Best, Andy Secombe, Frank Oz, Terence Stamp, Keira Knightley, Oliver Ford Davies,
            Ralph Brown, Warwick Davis, Sofia Coppola, Dominic West, Silas Carson",
        sinopsis: "Ambientada treinta años antes que 'La guerra de las galaxias' (1977), muestra la
            infancia de Darth Vader, el pasado de Obi-Wan Kenobi y el resurgimiento de los Sith,
            los caballeros Jedi dominados por el Lado Oscuro. La   Federación de Comercio ha bloqueado
            el pequeño planeta de Naboo, gobernado por la joven Reina Amidala; se trata de un plan
            ideado por Sith Darth Sidious, que, manteniéndose en el anonimato, dirige a los neimoidianos,
            que están al mando de la Federación. El Jedi Qui-Gon Jinn y su aprendiz Obi-Wan Kenobi
            convencen a Amidala para que vaya a Coruscant, la capital de la República y sede del Consejo
            Jedi, y trate de neutralizar esta amenaza. Pero, al intentar esquivar el bloqueo, la nave
            real resulta averiada, viéndose así obligada la tripulación a aterrizar en el desértico
            y remoto planeta de Tatooine..."
    }


## Request & Response Examples

### API Resources

  - [GET /magazines](#get-magazines)
  - [GET /magazines/[id]](#get-magazinesid)
  - [POST /magazines/[id]/articles](#post-magazinesidarticles)

### GET /magazines

Example: http://example.gov/api/v1/magazines.json

Response body:

    {
        "metadata": {
            "resultset": {
                "count": 123,
                "offset": 0,
                "limit": 10
            }
        },
        "results": [
            {
                "id": "1234",
                "type": "magazine",
                "title": "Public Water Systems",
                "tags": [
                    {"id": "125", "name": "Environment"},
                    {"id": "834", "name": "Water Quality"}
                ],
                "created": "1231621302"
            },
            {
                "id": 2351,
                "type": "magazine",
                "title": "Public Schools",
                "tags": [
                    {"id": "125", "name": "Elementary"},
                    {"id": "834", "name": "Charter Schools"}
                ],
                "created": "126251302"
            }
            {
                "id": 2351,
                "type": "magazine",
                "title": "Public Schools",
                "tags": [
                    {"id": "125", "name": "Pre-school"},
                ],
                "created": "126251302"
            }
        ]
    }

### GET /magazines/[id]

Example: http://example.gov/api/v1/magazines/[id].json

Response body:

    {
        "id": "1234",
        "type": "magazine",
        "title": "Public Water Systems",
        "tags": [
            {"id": "125", "name": "Environment"},
            {"id": "834", "name": "Water Quality"}
        ],
        "created": "1231621302"
    }



### POST /magazines/[id]/articles

Example: Create – POST  http://example.gov/api/v1/magazines/[id]/articles

Request body:

    [
        {
            "title": "Raising Revenue",
            "author_first_name": "Jane",
            "author_last_name": "Smith",
            "author_email": "jane.smith@example.gov",
            "year": "2012",
            "month": "August",
            "day": "18",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante ut augue scelerisque ornare. Aliquam tempus rhoncus quam vel luctus. Sed scelerisque fermentum fringilla. Suspendisse tincidunt nisl a metus feugiat vitae vestibulum enim vulputate. Quisque vehicula dictum elit, vitae cursus libero auctor sed. Vestibulum fermentum elementum nunc. Proin aliquam erat in turpis vehicula sit amet tristique lorem blandit. Nam augue est, bibendum et ultrices non, interdum in est. Quisque gravida orci lobortis... "
        }
    ]


## Mock Responses
It is suggested that each resource accept a 'mock' parameter on the testing server. Passing this parameter should return a mock data response (bypassing the backend).

Implementing this feature early in development ensures that the API will exhibit consistent behavior, supporting a test driven development methodology.

Note: If the mock parameter is included in a request to the production environment, an error should be raised.


## JSONP

JSONP is easiest explained with an example. Here's one from [StackOverflow](http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about?answertab=votes#tab-top):

> Say you're on domain abc.com, and you want to make a request to domain xyz.com. To do so, you need to cross domain boundaries, a no-no in most of browserland.

> The one item that bypasses this limitation is `<script>` tags. When you use a script tag, the domain limitation is ignored, but under normal circumstances, you can't really DO anything with the results, the script just gets evaluated.

> Enter JSONP. When you make your request to a server that is JSONP enabled, you pass a special parameter that tells the server a little bit about your page. That way, the server is able to nicely wrap up its response in a way that your page can handle.

> For example, say the server expects a parameter called "callback" to enable its JSONP capabilities. Then your request would look like:

>         http://www.xyz.com/sample.aspx?callback=mycallback

> Without JSONP, this might return some basic javascript object, like so:

>         { foo: 'bar' }

> However, with JSONP, when the server receives the "callback" parameter, it wraps up the result a little differently, returning something like this:

>         mycallback({ foo: 'bar' });

> As you can see, it will now invoke the method you specified. So, in your page, you define the callback function:

>         mycallback = function(data){
>             alert(data.foo);
>         };

http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about?answertab=votes#tab-top