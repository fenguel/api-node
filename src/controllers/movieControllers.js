const movies = require("../models/movies.json")
const axios = require("axios");
const getAll = (require, response) => {
    response.status(200).send(movies)
}

const getAllGhibliMovies = async (request, response) => {
    // url da api que vai ser consumida
    const apiResponse = await axios.get("https://ghibliapi.herokuapp.com/films");
    const data = apiResponse.data;
    
    response.status(200).send(apiResponse.data);
};

const createMovie = (request, response) => {
    //Objetivo: criar um filme

    // acessar a informação do filme através do body da requisição
   
    const title = request.body.title;
    const genre = request.body.genre;

    // construo o  objeto do novo filme

    let newMovie = {
        "id": Math.random().toString(32).substring(2, 6),
        "addedAt": new Date(),
        "title": title,
        "genre": genre
    }

    // adicionar ele na lista

    movies.push(newMovie);

    // enviar uma resposta
    response.status(201).send({
        "message": "Filme adicionado com sucesso", "data": newMovie
    })
};

module.exports = {
    getAll,
    createMovie,
    getAllGhibliMovies
}