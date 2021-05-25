angular
    .module("meanGames", ["ngRoute"])
    .config(appConfig);

function appConfig($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/game-list/game-list.html",
            controller: "GameListController",
            controllerAs: "gameListCtrl"
        })
        .otherwise({
            redirectTo: "/"
        })

}