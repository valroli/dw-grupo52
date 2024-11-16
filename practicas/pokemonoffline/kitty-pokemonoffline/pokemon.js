const obtenerPokemonPromesas = (nombrePokemon) => {

    return new Promise((resolve, reject) => {
        // Simular una solicitud asincrona para obtener datos del pokemón
        const pokemonDatabase = {
            "pikachu": {
                "nombre": "Pikachu",
                "tipo": "Electrico",
                "habilidad": "Electricidad"
            },
            "bulbasaur": {
                nombre: "Bulbasaur",
                "tipo": "Planta",
                "habilidad": "Latigo Cepa"
            },
            "charmander": {
                nombre: "Charmander",
                "tipo": "Fuego",
                "habilidad": "Lanza Llamas"
            },
            "golbat": {
                nombre: "Golbat",
                "tipo": "Veneno",
                "habilidad": "Fuerza mental"
            },
            "nidorina": {
                nombre: "Nidorina",
                "tipo": "Veneno",
                "habilidad": "Punto toxico"
            },
            "paras": {
                nombre: "Paras",
                "tipo": "Planta",
                "habilidad": "Efecto esporas"
            },
            
        }

        // Comprobar si el pokemon recibido existe en la base de datos.
        const pokemonEncontrado = pokemonDatabase[nombrePokemon.toLowerCase()];

        if (pokemonEncontrado) {
            resolve(pokemonEncontrado);
        } else {
            reject('No se encontro el pokemon con nombre ' + nombrePokemon);
        }

    });

};

obtenerPokemonPromesas('pikachu')
    .then((pokemon) => {
        console.log('si lo encontre');
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });

obtenerPokemonPromesas('mewtwo')
    .then((pokemon) => {
        console.log('Si lo encontre');
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });
    
obtenerPokemonPromesas('nidorina')
    .then((pokemon) => {
        console.log('si lo encontre');
        console.log(pokemon)    
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });    
    
obtenerPokemonPromesas('golbat')
    .then((pokemon) => {
        console.log('si lo encontre');
        console.log(pokemon)    
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });        