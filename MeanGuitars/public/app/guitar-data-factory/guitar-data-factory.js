angular
    .module("meanGuitars")
    .factory("GuitarDataFactory", GuitarDataFactory);

function GuitarDataFactory($http) {
    return {
        getGuitarList: () => getGuitarList($http)
    }
}

const getGuitarList = ($http) => {
    return $http.get("/api/guitars")
        .then(complete)
        .catch(failed)
}

const complete = (response) => {
    return response.data;
}

const failed = (error) => {
    console.log(error);
}