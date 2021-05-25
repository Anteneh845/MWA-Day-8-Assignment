angular
    .module("meanGames")
    .factory("GameDataFactory", GameDataFactory);

function GameDataFactory($http) {
    return {
        getGameList: () => getGameList($http)
    }
}

const getGameList = ($http) => {
    return $http.get("/api/games")
        .then(complete)
        .catch(failed)
}

const complete = (response) => {
    return response.data;
}

const failed = (error) => {
    console.log(error);
}